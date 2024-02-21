from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pymongo.mongo_client import MongoClient

from config import main_uri
from models import AuthModel
from controller.controllers import fetch_all_blogs, fetch_blog_from_id, login_controller

app = FastAPI()
orgins = [
  "http://localhost:3000",
  "http://localhost:8000",
  "http://localhost:8080",  
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
  blog = fetch_blog_from_id(client, blog_id)
  return blog, 404 if blog is None else 200

@app.get("/blog/")
def read_all_blogs():
  blogs = fetch_all_blogs(client)
  return blogs, 404 if blogs is None or len(blogs) <= 0 else 200

#Authenticating requests
@app.post("/login/")
def login(payload: AuthModel):
  login_controller(client, payload)

if __name__ == "__main__":
  import uvicorn
  uvicorn.run("main:app", host="localhost", port=8080, reload=True)

