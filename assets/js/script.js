// Current day in Header
$currentDate = $("#currentDay");
momentDate = moment().format('dddd, MMMM Do');
$currentDate.text(momentDate);


// current hour
momentHour = moment().get('hour');

// Load Tasks from Local Storage (if any)
timeArr = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']
timeArrInt = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Looping through times
for (i=0; i<9; i++) {
  arrID = timeArr[i];
  //console.log(arrID);

  $textAreaID = document.getElementById(arrID);
  $textAreaID.value = localStorage.getItem(arrID);

  // color any current or future blocks
  if (momentHour < timeArrInt[i]) {
    blockID = ['#block', arrID].join("");
    $block = $(blockID);
    $block.addClass("futureBlock");
  } else if (momentHour === timeArrInt[i]) {
    blockID = ['#block', arrID].join("");
    $block = $(blockID);
    $block.addClass("currentBlock");
  }
};


// Save Tasks
var saveTasks = function(blockID, textData) {
  localStorage.setItem(blockID, textData);
};


// Replace the textarea value on blur
$(".block").on("blur", "textarea", function() {
  var text = $(this)
    .val()
    .trim();
  
  // insert into textarea
  myId = $(this).attr("id");
  console.log('ID ', myId);
  myId.value = text;

  textID = document.getElementById(myId);

});

// save the textarea value to local storage when on click 'save'
$(".save").on("click", function(text) {

  // Grab the ID of the corresponding block
  var myClass = $(this).attr("class");
  myClass = myClass.split(" ")
  textID = myClass[2];

  // Grab the textarea text
  textValue = document.getElementById(textID).value;

  console.log(textValue);

  saveTasks(textID, textValue);

});




