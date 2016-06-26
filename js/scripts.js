// $(document).ready(function() {
//   var movementStrength = 15;
//   var height = movementStrength / $(window).height();
//   var width = movementStrength / $(window).width();
//   $("#background").mousemove(function(e) {
//     var pageX = e.pageX - ($(window).width() / 2);
//     var pageY = e.pageY - ($(window).height() / 2);
//     var newvalueX = width * pageX * -1 - 25;
//     var newvalueY = height * pageY * -1 - 50;
//     $('#background').css("background-position", newvalueX + "px     " + newvalueY + "px");
//   });
// });

var userName = "";
//Get user's name
function setName(e) {
    if(event.keyCode == 13) {
        userName = document.getElementById("userName").value;
        updateTime();
    }
}

//Update displayed time and greeting
function updateTime(){
  var today = new Date();
  var time = today.getHours();
  var minute = today.getMinutes();

  //Sets the current time
  var hour = time;
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  //Sets the greeting
  $(".currentHour").text(hour + ":" + minute);
  if (time < 3 || time > 22) {
    //Change greeting to: It's getting late, <name>. Try to get some rest!
    $(".greeting").text("Good evening, " + userName);
    $(".motivation").text("It's getting late. Try to get some rest!");
  } else if (time < 12) {
    //Change greeting to: Good morning, <name>. It's a brand new day, make it a great one! :)
    $(".greeting").text("Good morning, _______.");
    $(".motivation").text("It's a brand new day, make it a great one!");
  } else if (time < 16) {
    //Change greeting to: Good afternoon, <name>.
    $(".greeting").text("Good afternoon, " + userName);
    $(".motivation").text("Hmmm what should you eat for lunch?");
  } else if (time < 23) {
    //Change greeting to: Good evening, <name>.
    $(".greeting").text("Good evening, _______.");
  }
}

    // Weather.getCurrent( "Toronto", function( current ) {
    //     $( "#current" ).html( "Temperature: " +
    //         Weather.kelvinToFahrenheit( current.temperature() ) + "&deg;F or " +
    //         Weather.kelvinToCelsius( current.temperature() ) + "&deg;C" +
    //         "<br />Current Conditions: " + current.conditions() );
    // });
    //
    // Weather.getForecast( "Toronto", function ( forecast ) {
    //     $( "#forecast" ).html( "High: " +
    //         Weather.kelvinToFahrenheit( forecast.high() ) + "&deg;F or " +
    //         Weather.kelvinToCelsius( forecast.high() ) + "&deg;C<br />Low: " +
    //         Weather.kelvinToFahrenheit( forecast.low() ) + "&deg;F or " +
    //         Weather.kelvinToCelsius( forecast.low() ) + "&deg;C" );
    // });

$(document).ready(function(){
  if(userName!=""){
    setInterval(updateTime, 1000);
  }
});
