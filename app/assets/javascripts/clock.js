function updateClock(){
  var current = new Date();
  var currentYear = current.getFullYear();          // Gets the year as a 4-digit number
  var currentMonth = current.getMonth();            // (0 - 11)
  var currentDate = current.getDate();            // (1 - 31)
  var currentDay = current.getDay();              // (0 - 6)
  var currentHour = current.getHours();           // (0 - 23)
  var currentMinute = current.getMinutes();         // (0 - 59)
  var currentSecond = current.getSeconds();         // (0 - 59)
  //var currentMillisecond = current.getMilliseconds();     // (0 - 999)
  //var currentTimeZoneOffset = current.getTimezoneOffset();  // Local timezone minus GMT in minutes

  // Create the time string to be displayed
  if(currentMinute < 10){
  	currentMinute = "0" + currentMinute;
  }
  if(currentSecond < 10){
  	currentSecond = "0" + currentSecond;
  }
  var timeString = (currentHour % 12) + " : " + currentMinute + " : " + currentSecond;

  // Create the date string to be displayed

  // Change currentDay to Monday, Tuesday, etc.
  switch(currentDay){
    case 0:
      currentDay = "Sunday";
      break;
    case 1:
      currentDay = "Monday";
      break;
    case 2:
      currentDay = "Tuesday";
      break;
    case 3:
      currentDay = "Wednesday";
      break;
    case 4:
      currentDay = "Thursday";
      break;
    case 5:
      currentDay = "Friday";
      break;
    case 6:
      currentDay = "Saturday";
      break;
  }

  // Change currentMonth to January, February, etc.
  var months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"];

  currentMonth = months[currentMonth];

  var dateString = currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear;

  // Update the time
  document.getElementById("clock").firstChild.nodeValue = timeString;
  document.getElementById("date").firstChild.nodeValue = dateString;
}