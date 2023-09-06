# PollingApp- serverside

Develop the backend for a polling application using Node.js, Express.js, and a database out of MongoDB.

## Polling Application

This is a Node.js and Express.js-based polling application with user authentication and poll management. 
Users can create accounts, log in securely, create polls, vote in polls, view poll results, and see their voting history.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#API Endpoints Authentication
    /api/auth/register: Register a new user. 
    /api/auth/login: Log in as a registered user.
    /api/auth/logout: Log out the current user. Poll Management
    /api/polls: List all available polls.
    /api/polls/Id Get poll details and vote. User History
    /api/user/history: View voting history. 
        Database This project uses a MongoDBL database to store user accounts and poll data. 
        You can find the database schemas in the models directory.)

- [Database](#Find env'files contents)

## Features
- User authentication and registration
- Create, view, and participate in polls
- Polls with titles, descriptions, and options
- Securely store user data with encrypted passwords
- Display poll results after voting
- List all available polls
- View poll details and vote
- User voting history

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
  Navigate to the project directory:
      cd Project Dir,
  Install dependencies:
  npm install

- A MongoDB or MySQL database configured and accessible.
- Git installed (for cloning the project).

- Create a .env file in the project root directory and configure the following environment variables:
   {
      PORT=4000
      DATABASE = "mongodb://127.0.0.1:27017/vote?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6"
      SECRET = "#ThisIs123A13Temp653!orarySecret-Key@"
   }

-Usage
Start the application:
 # npm start
    Access the application in your browser at http://localhost:4000. on postman
    You SHould Seen Somthing Like This in Console:- 
            Mongoose: users.createIndex({ username: 1 }, { unique: true, background: true })
            Mongoose: polls.createIndex({ title: 1 }, { unique: true, background: true })
            Mongoose: users.createIndex({ password: 1 }, { unique: true, background: true })

 -Authentication
    #/api/auth/register: Register a new user.
    #/api/auth/login: Log in as a registered user.
    #/api/auth/logout: Log out the current user.

-Poll Management
  #/api/polls: List all available polls.
  #/api/polls/:id: Get poll details and vote.

Database
#This project uses a MongoDB/MySQL database to store user accounts and poll data. You can find the database schemas in the models directory.

Contributing
#Contributions are welcome! Feel free to open issues or pull requests to improve this project.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AmanPratap14/PollingApp.git
