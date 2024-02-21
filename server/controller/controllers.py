from pymongo import MongoClient
from bson.objectid import ObjectId

def fetch_blog_from_id(client: MongoClient, blog_id: str):
  try:
    db = client.blogspace
    collection = db.blogs
    blog = collection.find_one({"_id": ObjectId(blog_id)})
    blog = {
      "blog_id": str(blog["_id"]), # Convert ObjectId to string to avoid "Object of type ObjectId is not JSON serializable
      "title": blog["title"],
      "content": blog["content"],
      "author": blog["author"],
      "published_at": blog["published_at"],
      "verified": blog["verified"]
    }
    return blog
  except Exception as e:
    print(e)
    return "Interval server error. Please try again later."
  
def fetch_all_blogs(client: MongoClient):
  try:
    db = client.blogspace
    collection = db.blogs
    blogs = collection.find()
    blog_list = [{
      "blog_id": str(blog["_id"]), # Convert ObjectId to string to avoid "Object of type ObjectId is not JSON serializable
      "title": blog["title"],
      "tags": blog["tags"],
      "author": blog["author"],
      "published_at": blog["published_at"]
    } for blog in blogs if blog["verified"] == True]
    print(type(blog_list))
    return blog_list
  except Exception as e:
    print(e)
    return "Interval server error. Please try again later."
  
def login_controller(client: MongoClient, payload):
  try:
    db = client.blogspace
    collection = db.users
    user = collection.find_one({ "email": payload.email })
    return user
  except Exception as e:
    print(e)
    return "Interval server error. Please try again later."