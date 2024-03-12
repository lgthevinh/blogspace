import os

from datetime import datetime, timedelta

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
    "expires": datetime.utcnow() + timedelta(minutes=30)
  }
  token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
  return token