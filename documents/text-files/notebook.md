# Engineering Notebook 

## Project Overview

- Project Name: blogspace
- Project Description: A platform for sharing verified blog posts of users.
- Project Start Date: February 15, 2024
- Project End Date: ongoing

## Table of Contents

- [1. Introduction](#1-introduction)
- [2. Requirements](#2-requirements)
- [3. Design](#3-design)

## 1. Introduction

Blogspace is a platform for sharing blog posts. It allows users to create and publish blog posts, allowing users to share information about themselves and their interests.

## 2. Requirements

The requirements for the project are as follows:

- Authentication
- User profiles
- Blog post creation and publishing

## 3. Design

The project uses the following technologies:
- For client-side development: Next.js, React, and Tailwind CSS
- For server-side development: FastAPI, and MongoDB

Code format of the project:
- Function in Javascript are defined with camelCase, and variables are defined with snake_case. For example:
```javascript
const myFunction = () => {
  let my_variable = 0;
  return my_variable;
};
```
- As for the React components, they are defined with PascalCase. For example:
```javascript
const MyComponent = () => {
  return <div>Hello, world!</div>;
};
```

Data model of the project:
- The project uses a MongoDB database to store user profiles and blog posts. The user profile model is as follows:

- For authentication collection:
```json
{
  "email": "string",
  "password": "string",
}
```

- For user profile collection:
```json
{
  "fullname": "string",
  "username": "string",
  "email": "string",
  "bio": "string",
  "social_media": [
    {
      "display_text": "string",
      "url": "string"
    }
  ]
}
```

- For blog post collection:
```json
{
  "title": "string",
  "cover_image": "image_url",
  "content": "string",
  "author": {
    "user_id": "string",
    "username": "string"
  },
  "published_at": "string",
  "tags": ["string"],
  "verified": "boolean",
}
```
- Or blogs can be stored in markdown format.