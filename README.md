# Chatwall

A simple chatting app based on MEAN stack with features of:

1. Search for friends, view their profile in 'Search' tab
2. Send friend requests in 'Search' tab
3. Accept/Reject friend request in 'Inbox' tab
4. View notification message in 'Inbox' tab
5. Chat with friends (individually) in 'Friends' tab
6. All notification messages in 'Inbox' tab and all chat messages between friends in 'Friends' tab will persist (stored in MongoDB)

![chatwall](https://github.com/Alvin-Voo/chatwall/blob/master/demo1.gif "chatwall")

## Features

This project was built using the following technologies:

Frontend-
1. Angular 6.0
2. Angular material
3. Angular flexlayout
4. NGRX 6.0 for state management

Backend-
1. Express
2. Mongoose
3. Angular universal
4. Jsonwebtoken

## Development

Prerequisites:
1. First, make sure that angular cli 6.0 is installed globally
2. Make sure MongoDB 3.6 and above is installed
3. Make sure npm or yarn is installed
4. run 'git clone https://github.com/Alvin-Voo/chatwall.git' or download my project manually from git

To run locally:
1. Start your local mongo db
2. Start server - go into the project directory and run 'npm start'
3. Start angular live development - run 'ng serve'
4. You may view the application in http://localhost:4200

To build for Angular Universal locally (for development):
1. run 'npm run build'
2. run 'npm start'
3. You may view the application in http://localhost:3000

To build for Angular Universal for production:
1. run 'npm run build-prod'
2. deploy
** Beware of setting the environment configs:
*MONGODB_URI
*MONGODB_DBNAME - if you are using mongodb atlas
*JWT_SECRET
*change your host name accordingly in the environment.prod.ts
