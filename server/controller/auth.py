import os

from datetime import datetime, timedelta
from pymongo import MongoClient

from jose import jwt

try:
  from config import SECRET_KEY, ALGORITHM
except ImportError:
  SECRET_KEY = os.environ.get('SECRET_KEY')
  ALGORITHM = os.env

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

def create_access_token(username, email):
  payload = {
    "username": username,
    "email": email,
  }
  token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
  return token

def verify_token(token):
  try:
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    return payload
  except Exception as e:
    return None