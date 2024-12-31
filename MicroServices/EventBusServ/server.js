const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
require("dotenv").config();
app.use(bodyParser.json());
app.post("/events", (req, res) => {
  console.log("Received Event", req.body);
  const event = req.body;
  try {
    console.log(`${process.env.AUTH_SERV}/events`);
    axios.post(`${process.env.AUTH_SERV}/events`, event).catch((err) => {
      console.log(err.message);
    });
} catch (error) {
  console.log(error);
}
  try {
    console.log(`${process.env.STORAGE_SERV}/events`);
  axios.post(`${process.env.STORAGE_SERV}/events`, event).catch((err) => {
                            console.log(err.message);
});
} catch (error) {
  console.log(error);
}
  try {
    console.log(`${process.env.GALLERY_SERV}/events`);
  axios.post(`${process.env.GALLERY_SERV}/events`, event).catch((err) => {
                            console.log(err.message);
});
} catch (error) {
  console.log(error);
}
  try {
    console.log(`${process.env.LOG_SERV}/events`);
  axios.post(`${process.env.LOG_SERV}/events`, event).catch((err) => {
                        console.log(err.message);
});
} catch (error) {
  console.log(error);
}
  try {
    console.log(`${process.env.USAGE_SERV}/events`);
  axios.post(`${process.env.USAGE_SERV}/events`, event).catch((err) => {
                          console.log(err.message);
});
} catch (error) {
  console.log(error);
}
  try {
    console.log(`${process.env.QUERY_SERV}/events`);
  axios.post(`${process.env.QUERY_SERV}/events`, event).catch((err) => {
                          console.log(err.message);
});
} catch (error) {
  console.log(error);
}
  res.send({ status: "OK" });
});

port=process.env.PORT || 4010;
app.listen(4010, () => {
  console.log("Event Bus Listening on 4010");
});