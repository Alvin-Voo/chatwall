# Chatwall

A chatting app based on MEAN stack with features of:

1. Search for friends, view their profile in 'Search' tab
2. Send friend requests in 'Search' tab
3. Accept/Reject friend request in 'Inbox' tab
4. View notification message in 'Inbox' tab
5. Blinking notification in notification area for new messages in 'Inbox' tab
6. All notification messages in 'Inbox' tab are persisted (stored in MongoDB)
7. Friends online and offline status reflected in real time on friends (mat)card in 'Friends tab'
8. Chat with friends (individually) in 'Friends' tab
9. Blinking friends (mat)card for new chat messages received in 'Friends' tab
10. All chat messages between friends in 'Friends' tab are persisted (stored in MongoDB)

Check it out at https://mean-chatwall.herokuapp.com. Be mindful that it is a bit laggy here since I'm using free tier.  

This app takes the idea of being able to search for friends and send friends requests from Facebook,  
combined with an old school style MSN chatbox  

1st Demo - locally run with Angular universal (server side rendering)

![chatwall-local](https://github.com/Alvin-Voo/chatwall/blob/master/demo0.gif "chatwall-local")

2nd Demo - on heroku. A bit laggy here.

![chatwall](https://github.com/Alvin-Voo/chatwall/blob/master/demo1.gif "chatwall")

## Project overview

![project_overview](https://github.com/Alvin-Voo/chatwall/blob/master/project_overview.png "project_overview")

Ngrx Stores*

![ngrx_stores](https://github.com/Alvin-Voo/chatwall/blob/master/ngrx_stores.png "ngrx_stores")

## Technologies

This project was built using the following technologies:

Frontend-
1. Angular 6.0
2. Angular material
3. Angular flexlayout
4. NGRX 6.0 for state management

Backend-
1. Express
2. Mongoose
3. Angular universal (server side rendering)
4. Jsonwebtoken
5. SocketIo
6. SocketIo-JWT (jsonwebtoken)

## Development

Prerequisites:
1. First, make sure that angular cli 6.0 is installed globally
2. Make sure MongoDB 3.6 and above is installed
3. Make sure npm or yarn is installed
4. Run 'git clone https://github.com/Alvin-Voo/chatwall.git' or download my project manually from git
5. Run 'npm install' or 'yarn install' in the project directory

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
   MONGODB_URI  
   MONGODB_DBNAME - if you are using mongodb atlas  
   JWT_SECRET  
   change your host name accordingly in the environment.prod.ts  

## Notice

I am exposing my /dist here since I am also deploying /dist/* into heroku for hosting purpose.  
Beware that running 'ng serve' will overwrite /dist/browser/*  
