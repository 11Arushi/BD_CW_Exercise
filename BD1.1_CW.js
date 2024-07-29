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

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
