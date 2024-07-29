let express = require("express");
let app = express();
let port = 3000;

//1st Question Answer
app.get("/shout", (req, res) => {
  let name = req.query.name;
  let upperName = name.toUpperCase();

  res.send(upperName);
});

//2nd Question Answer
app.get("/fullName", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;

  res.send(fullName);
})

//3rd Question Answer
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ", " + year;

  res.send(formattedDate);
})

//4th Question Answer
app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greeting = "Namaste, " +  name + "!";

  res.send(greeting);
})

//5th Question Answer
app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ", " + city + ", " + state;

  res.send(address);
  
})

//6th Question Answer
app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + "@" + domain;

  res.send(email);
})

//OPERATORS
//QUESTION NO 1
app.get("/total-distance", (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
})

//QUESTION NO 2
app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  
  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

//QUESTION NO 3
app.get("/average-speed", (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  
  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString());
});

//QUESTION NO 4
app.get("/eta", (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);

  let eta = distance / speed;
  res.send(eta.toString());
});

//QUESTION NO 5
app.get("/total-calories", (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);

  let totalCalories = (duration1 * caloriesPerMinute) + (duration2 * caloriesPerMinute);
  res.send(totalCalories.toString());
});

//QUESTION NO 6
app.get("/interest-earned", (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let interestEarned = (principal * rate * time) / 100;
  res.send(interestEarned.toString());
});






app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
