from datetime import datetime

from pymongo import MongoClient
from bson.objectid import ObjectId

def fetch_blog_from_id(client: MongoClient, blog_id: str):
  db = client.blogspace
  collection = db.blogs
  blog = collection.find_one({"_id": ObjectId(blog_id)})
  if blog is None:
    return None
  blog = {
    "blog_id": str(blog["_id"]), # Convert ObjectId to string to avoid "Object of type ObjectId is not JSON serializable
    "title": blog["title"],
    "content": blog["content"],
    "author": blog["author"],
    "published_at": blog["published_at"].strftime("%B %d, %Y"),
    "verified": blog["verified"]
  }
  return blog
  
def fetch_all_blogs(client: MongoClient):
  db = client.blogspace
  collection = db.blogs
  blogs = collection.find()
  if blogs is None:
    return None
  blog_list = [{
    "blog_id": str(blog["_id"]), # Convert ObjectId to string to avoid "Object of type ObjectId is not JSON serializable
    "title": blog["title"],
    "tags": blog["tags"],
    "author": blog["author"],
    "published_at": blog["published_at"].strftime("%B %d, %Y"),
  } for blog in blogs if blog["verified"] == True]
  return blog_list

def fetch_auth_user_from_email(client: MongoClient, email: str):
  db = client.blogspace
  collection = db.auth_user
  user = collection.find_one({ "email": email })
  if user is None:
    return None
  user = {
      "auth_id": str(user["_id"]),
      "email": user["email"],
      "username": user["username"],
      "password": user["password"],
    }
  return user