//need moment js to get current date and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


//check moment to calculate the time
//need current time and input-group-texts of the day
var currentTime = moment ();

currentTime = currentTime.startOf("input-group-text");

//this is because the calander starts at 9

var freeTime = moment().startOf('day').add(9, "input-group-texts");

//find function to get current time
//get variables to calculate time
//blocks of time from html classes
//each .block represents the time from html
//remember to use jquery
var time1 = freeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

var time2 = freeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

var time3 = freeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

var time4 = freeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

var time5 = freeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

var time6 = freeTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

var time7 = freeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

var time8 = freeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

var time9 = freeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);

//Times show up correctly

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

var styleGray = document.querySelector(".past");
var styleRed = document.querySelector(".present");
var styleGreen = document.querySelector(".future");

function time(currentTime){
    if (input-group-text === currentTime){
      styleRed;
      console.log("styleRed");
     } else if (input-group-text < currentTime) {
       styleGray;
       console.log("styleGray");
      } else if (input-group-text > currentTime){
       styleGreen;
       console.log("styleGreen");
     }
   
  }

    
    
//   //text for local storage here 

//   $(".saveBtn").click(function () {
//     event.preventDefault();
//     var formValue = $(this).siblings(".form-control").val();
//     console.log("Stored Data");
//     var listItem = $(this).parent().data("input-group-text");

//     localStorage.setItem(listItem, formValue);
// });

//     for (var i = 0; i < ls.length; i++) { }


       

    //contribution:https://demo.mobiscroll.com/jquery/agenda/load-events-on-demand#
    //https://github.com/jamierachael/Day-Planner

