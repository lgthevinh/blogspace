import os

from datetime import datetime, timedelta, timezone

from jose import jwt

try:
  from config import SECRET_KEY, ALGORITHM
except ImportError:
  SECRET_KEY = os.environ.get('SECRET_KEY')
  ALGORITHM = os.env

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