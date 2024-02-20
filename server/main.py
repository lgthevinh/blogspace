from fastapi import FastAPI
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from config import main_uri
from controller.controllers import fetch_all_blogs, fetch_blog_from_id

app = FastAPI()
client = MongoClient(main_uri)

@app.get("/")
def read_root():
  return {"Hello": "World"}

@app.get("/blog/{blog_id}")
def read_blog(blog_id: str, q: str = None):
  blog = fetch_blog_from_id(client, blog_id)
  return blog, 404 if blog is None else 200

@app.get("/blog/")
def read_all_blogs():
  blogs = fetch_all_blogs(client)
  return blogs, 404 if blogs is None or len(blogs) <= 0 else 200

#Authenticating requests
@app.post("/login/")
async def login(username: str, password: str):
  return {"username": username, "password": password}


if __name__ == "__main__":
  import uvicorn
  uvicorn.run("main:app", host="localhost", port=8080, reload=True)

