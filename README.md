# NoobTube

[Live Link](https://noobtube.herokuapp.com/)

## Background and Overview. 
Welcome to NoobTube, a YouTube clone with a twist. Powered by the Mern stack, this app provides users with an interactive user experience centered around enjoying quick-scope videos. 

This project was designed and built in under 1 week.

## Technologies
* Javascript
* MongoDB
* React
* Express
* Node.js

## Features
* User Authentication using BCrypt
* Video Index
* Video Show Page
* User Profile Page

### Video Index

![](https://user-images.githubusercontent.com/29221213/73291002-f94a1a00-41c4-11ea-9734-1459c0602b75.png)

1. The video index pulls up a list of linked videos along with the video's thumbnail, title, and author. 
2. From this index, the user can navigate to the individual video show page. 
3. The thumbnail image is derived from a string manipulation of the YouTube videos url. Below is code snippet that demonstrates how the NoobTube thumbnail is derived. 

![](https://user-images.githubusercontent.com/29221213/73289210-ef72e780-41c1-11ea-8d27-b2682d2e5f32.png)

### Video Show 

1. Main Feature: **Embedded Video**
2. In addition to the embedded video, the video show page has both a like and comment section. The likes to dislikes ratio is reflected in a bar below the video. The comment section is below the like section. 
3. On the right side of the page, there's a shorter index of videos that the user can use to navigate to other videos. 
![](https://user-images.githubusercontent.com/29221213/73291015-fea76480-41c4-11ea-8f5a-f075273cc60e.png)

## Work Breakdown
* 11/25/19: User Auth & Greeting Page
* 11/26/19: Video Upload
* 11/27/19: Build Video feed and Video Show
* 11/30/19: CSS
* 12/01/19: Likes, Comments, Search
* 12/02/19: Seed / Finish Styling



## Functionality and MVP
* Video Upload and Playback
* Likes/dislikes for video
* Comments
* Search
* Bonus: Number of plays
* Bonus: upvotes/downvotes for comments
* Bonus: channels and subscriptions


