from pydantic import BaseModel

class Blog(BaseModel):
  _id: str
  title: str
  cover_image: str
  content: str
  author: str
  published_at: str
  tags: list
  verified: bool