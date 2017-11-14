# Simple-Reddit-API
## A sample app created for the Cisco co-op coding challenge.

![Screenshot](https://i.imgur.com/PSrfhij.png)

## Installation Guide:
### 1. Clone the repository
### 2. Open up two terminals
### 3. In one terminal window, `cd` into the backend directory and run `npm install` followed by `npm start`. This will start the backend on port 8000.
### 4. In another terminal window, `cd` into the frontend directory and run `npm install` followed by `npm start`. This will start the frontend on port 3000.
### 5. You can now access the app by typing in `localhost:3000` in your web browser.

## Frameworks Used:
### * Node.js
### * Express.js
### * React.js

## How it works:
### The api simply acts as a wrapper for the existing Reddit json api. The only significant route it has is the subreddit/:name route, which returns json of the title and url of the top 25 posts on that subreddit. I chose to only return the title and url because I wanted to make a minimalist take on reddit.
### The frontend simply presents the json in a more readable format. I chose to allow the user to examine the difference between two subreddits as I thought it would be a more involved process than simplying displaying json for a single subreddit. It also provides functionality that does not exist within the base reddit page. I also find it very interesting to examine differing subreddits to see how different communities react to different news events.

## Live site:
### TODO: insert heroku link

## Things I learned during this project:
### * Node and Express
### * Express middleware
### * Error handling in an API
### * Passing handlers as props to child components
### * Javascript event handlers (Blur and onChange)
### * Flexbox


