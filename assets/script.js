
var today = dayjs().format('dddd, MMMM D YYYY');

var currentDay = $("#currentDay");

currentDay.text(today);



$(document).ready(function () {

$("#9 .description").val(localStorage.getItem(9));
$("#10 .description").val(localStorage.getItem(10));
$("#11 .description").val(localStorage.getItem(11));
$("#12 .description").val(localStorage.getItem(12));
$("#13 .description").val(localStorage.getItem(13));
$("#14 .description").val(localStorage.getItem(14));
$("#15 .description").val(localStorage.getItem(15));
$("#16 .description").val(localStorage.getItem(16));
$("#17 .description").val(localStorage.getItem(17));

  $(".saveBtn").on('click', function () {

    var textStore = $(this).parent().children(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, textStore);
  
    
  })

  


})





var past = $(".past");
var present = $(".present");
var future = $(".future");

var colorChange = $(".description");


// noteText.children().eq(0).text();
// startHour = dayjs().hour(9 ,'A');
// endHour = dayjs().hour(18,'A');



hourID = 8;

textOnSreen = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

for (i = 0; i < 9; i++) {
  var container = $(".container-lg");


  busHours = dayjs().hour();

  hourID++;
  var hourBlock = $('<div>', {
    'class': 'row time-block ',
    'id': hourID
  });
  var hourCol = $('<div>', {
    'class': 'col-2 col-md-1 hour text-center py-3',
    'text': (textOnSreen[i])
  });
  descriptionCol = $('<textarea>', {
    'class': 'col-8 col-md-10 description',
    'rows': '3',
  });
  var saveBtn = $('<button>', {
    'class': 'btn saveBtn col-2 col-md-1',
    'aria-label': 'save'
  });
  var saveIcon = $('<i>', {
    'class': 'fas fa-save',
    'aria-hidden': 'true'
  });
  saveBtn.append(saveIcon);
  hourBlock.append(hourCol, descriptionCol, saveBtn);
  container.append(hourBlock);

  if (busHours > hourID) {
    descriptionCol.addClass("past");
  } else if (busHours === hourID) {
    descriptionCol.addClass("present")
  } else {
    descriptionCol.addClass("future")
  }




}
