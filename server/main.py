import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from pymongo.mongo_client import MongoClient

from models import AuthModel
from controller.controllers import fetch_all_blogs, fetch_blog_from_id, fetch_user_data_from_email
from controller.auth import create_access_token, fetch_auth_user_from_email

try:
  from config import main_uri
except ImportError:
  main_uri = os.environ.get('MONGO_URI')

app = FastAPI()
orgins = [
  "http://localhost:3000",
  "https://blogspace-psi.vercel.app"
]
app.add_middleware(
  CORSMiddleware,
  allow_origins=orgins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

client = MongoClient(main_uri)

@app.get("/")
def read_root():
  return {"Hello": "World"}

@app.get("/blogs/{blog_id}")
def read_blog(blog_id: str):
  try:
    blog = fetch_blog_from_id(client, blog_id)
    return JSONResponse(content=blog, status_code=200) if blog is not None else JSONResponse(content={"msg": "Blog not found"}, status_code=404)
  except Exception as e:
    print(e)
    return JSONResponse(content={"msg": "Internal server error. Please try again later."}, status_code=500)

@app.get("/blogs/")
def read_all_blogs():
  try:
    blogs = fetch_all_blogs(client)
    return JSONResponse(content=blogs, status_code=200)
  except Exception as e:
    print(e)
    return JSONResponse(content={"msg": "Internal server error. Please try again later."}, status_code=500)

#Authenticating requests
@app.post("/login/")
def login(payload: AuthModel):
  email = payload.email
  password = payload.password
  try:
    user = fetch_auth_user_from_email(client, email)
    if user is None:
      return JSONResponse(content={"msg": "Email not found"}, status_code=404)
    if password != user["password"]:
      return JSONResponse(content={"msg": "Invalid credentials"}, status_code=401)
    user_data = fetch_user_data_from_email(client, email)
    response = JSONResponse(content=user_data, status_code=200)
    response.set_cookie(key="token", value=create_access_token(user["username"], user["email"]))
    return response
  except Exception as e:
    print(e)
    return JSONResponse(content={"msg": "Internal server error. Please try again later."}, status_code=500)