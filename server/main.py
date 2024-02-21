from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException

from pymongo.mongo_client import MongoClient

from config import main_uri
from models import AuthModel
from controller.controllers import fetch_all_blogs, fetch_blog_from_id, fetch_auth_user_from_email

app = FastAPI()
orgins = [
  "http://localhost:3000",
  "http://localhost:8000",
  "http://localhost:8080",
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

@app.get("/blog/{blog_id}")
def read_blog(blog_id: str):
  try:
    blog = fetch_blog_from_id(client, blog_id)
    return JSONResponse(content=blog, status_code=200) if blog is not None else JSONResponse(content={"msg": "Blog not found"}, status_code=404)
  except Exception as e:
    print(e)
    return JSONResponse(content={"msg": "Internal server error. Please try again later."}, status_code=500)

@app.get("/blog/")
def read_all_blogs():
  blogs = fetch_all_blogs(client)
  return blogs, 404 if blogs is None or len(blogs) <= 0 else 200

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
    return JSONResponse(content=user, status_code=200)
  except Exception as e:
    print(e)
    return JSONResponse(content={"msg": "Internal server error. Please try again later."}, status_code=500)

if __name__ == "__main__":
  import uvicorn
  uvicorn.run("main:app", host="localhost", port=8080, reload=True)

