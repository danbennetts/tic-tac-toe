$(document).ready(function(){

//What are the main things we need to keep track of and do?

//There are two players and we need to find out who's currently playing (whether it is X or 0)

  //We need to store both players information so that it is accessible.

var playerOne = {
  icon: 'X',
  name: 'Player One',
};

var playerTwo = {
  icon: 'O',
  name: 'Player Two',
};

// Check if the event listener works when you click on a column
$('.game-board').on('click', '.column', function(event) {
  //Create a variable that can store the current event handler.
  //Have prefixed it with $ so I can identify it later.
  var $column = $(event.currentTarget);
  $column.addClass('column-x');
});








});
