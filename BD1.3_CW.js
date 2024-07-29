let express = require("express");
let app = express();
let port = 3000;

//Question Number 1
app.get("/check", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if (number >= 0) {
    result = "Number is positive";
  } else {
    result = "Number is negative";
  }
  console.log(result);
  res.send("Number is " + result);
});


//Question Number 2
app.get("/check-even-odd", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = " ";
  if (number % 2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }
  
  res.send("Number is " + result);
});


//Question Number 3
app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn;
  let result = "";
  if(isLoggedIn === "true") {
    result = "User is logged in";
  }
  else {
    result = "User is not logged in";
  }
  res.send(result);
});


//Question Number 4
app.get("/check-discount", (req, res) => {
  let age = parseFloat(req.query.age);
  let result = ""
  if(age > 65) {
    result = "User is eligible for a discount";
  }
  else {
    result = "User is not eligible for a discount";
  }
  res.send(result);
})

//Question Number 5
app.get("/check-Number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = ""
  if(number > 0) {
    result = "Number is positive";
  }
  else if(number < 0) {
    result = "Number is negative";
  }
  else {
    result = "Number is zero";
  }
  res.send(result);
})


//Question Number 6
app.get("/check-temperature", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result = ""
  if(temperature < 15) {
    result = "Temperature is Cold "
  }
  else if(temperature <= 25) {
    result = "Temperature is Warm"
  }
  else{
    result = "Temperature is Hot"
  }
  res.send(result);
})


//Question number 7
app.get("/check-activity-level", (req, res) => {
  let numberOfSteps = parseFloat(req.query.numberOfSteps);
  let result = ""
  if(numberOfSteps < 5000) {
    result = "Activity level is Low"
  } 
  else if(numberOfSteps <= 10000) {
    result = "Activity level is Moderate"
  }
  else {
    result = "Activity level is High"
  }
  res.send(result)
})


//Question number 8
app.get("/check-engagement", (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result = ""
  if(likes < 100) {
    result = "Engagement level is Low"
  }
  else if(likes <= 500) {
    result = "Engagement level is Medium"
  }
  else {
    result = "Engagement level is High"
  }
  res.send(result)
})


app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
