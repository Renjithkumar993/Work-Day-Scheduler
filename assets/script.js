
var today = dayjs().format('dddd, MMMM D YYYY');

var currentDay = $("#currentDay");

currentDay.text(today);


$(document).ready(function () {
  sucessmsg.hide('hide');

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


    sucessmsg.slideDown('slow');
    sucessmsg.delay(1000).slideUp('slow');

  })


})


var past = $(".past");
var present = $(".present");
var future = $(".future");

var container = $(".container-lg");
var sucessmsg = $('<div>', {
  'class': "alert alert-success text-center ", 'role': "alert,",
  'text': "You have successfully added/changed the event to local storage ✔"
});

container.append(sucessmsg);


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
    'rows': '3', 'color': 'black'
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



$(".btn-primary").on('click', function(){

 localStorage.clear();
 location.reload();
 
})
