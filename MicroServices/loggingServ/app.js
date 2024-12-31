const express = require("express")
const app=express()
const cors=require("cors")
const bodyParser = require('body-parser');
const mongoose = require("./config/db");
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors())
const { Log } = require("./models/LogSchema");



app.post("/logs/events", async (req, res) => {
  console.log("Event Received:", req.body.type);
  const { type, data,clientIp } = req.body;
  if (type === "UserCreated") {
    try {
      const { userId, username } = data;
      const log = new Log({
        userId,
        ipAddress:clientIp,
          message: `User ${username} created`,
      });
      await log.save();
    } catch (error) {
      console.error("Error creating log for user creation:", error);
    }
  }

  if (type === "UserLoggedIn") {
    try {
      const { userId, username } = data; 
      const log = new Log({
        userId,
        ipAddress:clientIp,
        message: `User ${username} with ${userId} logged in`,
      });
      
      
        await log.save();
      
    } catch (error) {
      console.error("Error creating log for user login:", error);
    }
  }
  if (type === "videosAdded") {
    try {
      const { userId, video } = data;
      const log = new Log({
        userId,
        ipAddress:clientIp,
        message: `User ${userId} has uploaded a video ${video.title}`,
      });
      await log.save();
    } catch (error) {
      console.error("Error creating log for video removed:", error);
    }
      
          
  }
  if (type === "videoRemoved") {
    try {
      const { userId,videoId } = data; 
      const log = new Log({
        userId,
        ipAddress:clientIp,
        message: `User ${userId} has uploaded a video ${video.title}`,
      });
      await log.save();
    } catch (error) {
      console.error("Error creating log for video removed:", error);
    }
  }

  res.send({});
});


const port = process.env.PORT || 4003;

app.listen(port,()=>console.log(`Log service Server up and running on port ${port}`));