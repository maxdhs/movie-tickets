//Business Logic
//Movie Objets

var Venom = {
  name: "Venom",
  price: 8
}

var Nutcracker = {
  name: "Nutcracker",
  price: 6
}

var Aladdin = {
  name: "Aladdin",
  price: 7
}
var msg ="";

var UserInput = function(movieInput, dateInput, timeInput, userAge, ticketNumber){
  this.movieInput = movieInput;
  this.dateInput = dateInput;
  this.timeInput = timeInput;
  this.userAge = userAge;
  this.ticketNumber = ticketNumber;
}



var ticket = function(userInput) {
  debugger;
  if (userInput.movieInput == "Venom") {
    if (userInput.userAge >= 55) {
      price = (Venom.price - 4) * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Venom");
    } else {
      price = Venom.price * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Venom");
    }
  } else if (userInput.movieInput == "Nutcracker") {

    if (userInput.userAge >= 55) {
      price = (Nutcracker.price - 4) * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Nutcracker");
    } else {
      price = Nutcracker.price * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Nutcracker");
    }
  } else if (userInput.movieInput == "Aladdin") {

    if (userInput.userAge >= 55) {
      price = (Aladdin.price - 4) * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Aladdin");
    } else if (userInput.userAge <= 15) {
      price = (Aladdin.price - 5) * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Aladdin");
    } else {
      price = Aladdin.price * userInput.ticketNumber;
      msg = (userInput.ticketNumber + " tickets at total price of $" + price + " for Aladdin");
    }
  }
};



//User Interface Logic
$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var movieInput = $("#movieInput").val();
    var dateInput = $("#dateInput").val();
    var timeInput = $("#timeInput").val();
    var userAge = parseInt($("#userAge").val());
    var ticketNumber = parseInt($("#ticketNumber").val());
    var userInput = new UserInput(movieInput, dateInput, timeInput, userAge, ticketNumber);
    ticket(userInput);
    $("#output").append("<h2>" + msg + "</h2>");
  });
});
