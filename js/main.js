$(document).ready(function() {

  //What are the main things we need to keep track of and do?

  //We need to find out possible combinations in all directions. Possibly an array or object?

  var possibleCombos = [
    //Horizontal Combo
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Vertical Combo
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal Combo
    [0, 4, 8],
    [2, 4, 6]
  ];


  //There are two players and we need to find out who's currently playing (whether it is X or 0)


  //We need to store the current players moves, this coukd be an object.
  var playersChosenMoves = {
    'pred': [],
    'alien': []
  };

  //We need to store both players information so that it is accessible.
  var currentPlayer = 'pred';

  // Check if the event listener works when you click on a column
  $('.game-board').on('click', ".column:not('.column-pred, .column-alien')", function(event) {
    //Create a variable that can store the current event handler.
    //Have prefixed it with $ so I can identify it later.
    var $column = $(event.currentTarget);
    $column.addClass('column-' + currentPlayer);


    var columnIndex = $('.game-board .column').index($column);
     var currentPlayerColumn = playersChosenMoves[currentPlayer]
     currentPlayerColumn.push(columnIndex);
     console.log(playersChosenMoves);


    //We need to be able to swap players, a conditional maybe?
    if (currentPlayer === 'pred') {
      currentPlayer = 'alien';
    } else {
      currentPlayer = 'pred';
    }
  });









});
