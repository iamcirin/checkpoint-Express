const express = require("express");

const app = express();

const timer = (req, res, next) => {
  const date = new Date().getDay();
  const hours = new Date().getHours();
  if ((9 <= hours && hours < 17) && ( 1<= date && date <=  5)) {
    next();
    console.log(hours);
  } else {
    res.send(
      "page not available, is only available during working hours (Monday to Friday,  from 9 to 17)"
    );
  }
};
app.use(timer);
app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000);
