let express = require("express");
let app = express();
let port = 3000;

//function to return a welcome message
function getWelcomeMessage(){
  return "Welcome  to our service!"
}
// Endpoint 1:return a welcome message
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
})
// Function to return a greeting message
function getGreetWelcomeMessage(username){
  return "Hello," + username + "!"
}
// Endpoint 2:Take a username and return a greeting message
  app.get("/greet", (req, res) => {
    let username = req.query.username;
    res.send(getGreetWelcomeMessage(username));
  })

// Function to check if a person has experience
  function checkYearsOfExp(yearsOfExp){
  if(yearsOfExp > 0){
    return "You have some experience with functions. Great!";
    } else {
    return "No worries. You will start writing functions in no time!";
    }
  }
// Endpoint 3: Takes the years of experience in functions and return a message
   app.get("/message", (req, res) => {
     let yearsOfExp = parseFloat(req.query.yearsOfExp);
     res.send(checkYearsOfExp(yearsOfExp));
   });

// Function to return the time the student can dedicate to learn functions
  function getTime(days, hours){
  return days * hours;
  }
// Endpoint 4: Take the hours per day and days in a week that the student can dedicate to learn functions and find the hours
   app.get("/hours", (req, res) => {
     let days = parseFloat(req.query.days);
     let hours = parseFloat(req.query.hours);
     res.send(getTime(days, hours).toString());
   });

// Function to return the modules Completion Message
  function getModuleCompletion(username, hasCompleted){
  if(hasCompleted){
    return username + "has completed the modules";
  }else{
    return username + "has  not completed the modules";
  }
  }
// Endpoint 5: Take a username and a boolean indicating module completion status, return amessage if the student has completedthe modules or not
   app.get("/module-completion-status", (req, res) => {
     let username = req.query.username;
     let hasCompleted= req.query.hasCompleted === "true";
     res.send(getModuleCompletion(username, hasCompleted));
   });

// Function to return a personalized greeting message
  function getPersonalizedGreeting(city, name){
  return "Hey, " + name + "! what's famous about " + city + "?";
  }
// Endpoint 6: Take a student's city and name, return a personalized greeting message
   app.get("/personalized-greeting", (req, res) => {
     let city = req.query.city;
     let name = req.query.name;
     res.send(getPersonalizedGreeting(city, name));
   });

// Function to find  the age from birth year
  function findAge(birthyear){
  return 2024 - birthyear;
  }
// Endpoint 7: Take the birth year of the student and return the age
   app.get("/find-age", (req, res) => {
     let birthyear = parseInt(req.query.birthyear);
     
     res.send(findAge(birthyear).toString());
   });

// Function to return the time required message
function findRequiredTime(days, hours){
  let time = days * hours;
  if(time >= 30){
    return "This time being dedicated is sufficient for learning functions";
  } else {
    return "The time dedicated is not sufficient for learning functions";
  }
}
// Endpoint 8: Take the days per week and hours per day a student can dedicate to learn functions and return
   app.get("/is-time-sufficient", (req, res) => {
     let days = parseFloat(req.query.year);
      let hours = parseFloat(req.query.hours);
     res.send(findRequiredTime(days, hours).toString());
   });




  app.listen(port,() => {
    console.log("Server is running on http://localhost:" + port);
  }); 