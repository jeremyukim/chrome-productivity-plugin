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
function updateTime(){
  var today = new Date();
  var time = today.getHours();
  var minute = today.getMinutes();

  //For displaying the current time
  var hour = time;
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }
  $(".currentHour").text(hour + ":" + minute);
}

$(document).ready(function(){
  var today = new Date();
  var time = today.getHours();
  var minute = today.getMinutes();

  setInterval(updateTime, 1000);

  if (time < 3 || time > 22) {
    //Change greeting to: It's getting late, <name>. Try to get some rest!
    $(".greeting").text("It's getting late, Jeremy. Try to get some rest!");
  } else if (time < 12) {
    //Change greeting to: Good morning, <name>. It's a brand new day, make it a great one! :)
    $(".greeting").text("Good morning, Jeremy. It's a brand new day, make it a great one! :)");
  } else if (time < 16) {
    //Change greeting to: Good afternoon, <name>.
    $(".greeting").text("Good afternoon, Jeremy.");
  } else if (time < 23) {
    //Change greeting to: Good evening, <name>.
    $(".greeting").text("Good evening, Jeremy.");
  }
});
