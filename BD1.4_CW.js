let express = require("express");
let app = express();
let port = 3000;


//Question 1
function getWelcomeMessage() {
  return "Welcome to our service!";
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage()); 
});

//Question 2
function getGreeting(userName) {
  return "Hello, " + userName + "!";
}
app.get("/greety", (req, res) => {
  let userName = req.query.userName;
  res.send(getGreeting(userName));
});

//Question 3
function checkPassword(password) {
  if(password.length > 15) {
    return "Password is strong.";
  }
  else {
    return "Password is weak.";
  }

}
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

//Question 4
function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2));
})

//Question 5
function calculateSubscription(userName, isSubscribed) {
  if(isSubscribed === "true") {
    return userName + " is subscribed";
  }
  else{
    return userName + " is not subscribed";
  } 

}
app.get("/user-subscription", (req, res) => {
  let userName = req.query.userName;
  let isSubsribed = req.query.isSubscribed;
  res.send(calculateSubscription(userName, isSubsribed))
})

//Question 6
function checkDiscount(price, discount) {
  let discountedPrice = price - (price * discount / 100);
  return discountedPrice.toString();
}
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(checkDiscount(price, discount));
})

//Question 7
function getPersonalizedGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

//question 8
function getFinalPrices(price, discount, tax) {
  let discountedPrice = price - (price * discount / 100);
  let finalPrice = discountedPrice + (discountedPrice * tax / 100);
  return finalPrice.toString();
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrices(price, discount, tax));
})

//Question 9
function checkTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;

}

app.get("/total-exercise", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(checkTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
