$(document).ready(function() {

  //What are the main things we need to keep track of and do?

  //We need to find out possible combinations in all directions. Possibly an array or object?

  var possibleCombos = [
    //Horizontal Combo
    ['column1', 'column2', 'column3'],
    ['column4', 'column5', 'column6'],
    ['column7', 'column8', 'column9'],
    //Vertical Combo
    ['column1', 'column4', 'column7'],
    ['column2', 'column5', 'column8'],
    ['column3', 'column6', 'column9'],
    //Diagonal Combo
    ['column1', 'column5', 'column9'],
    ['column3', 'column5', 'column7']
  ];
  // var possibleCombos = [
  //   //Horizontal Combo
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   //Vertical Combo
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   //Diagonal Combo
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ];


  //There are two players and we need to find out who's currently playing (whether it is X or 0)


  //We need to store the current players moves, this coukd be an object.
  var playersChosenMoves = {
    'Predator': [],
    'Alien': []
  };


  //We need to store both players information so that it is accessible.
  var currentPlayer = 'Predator';
  var tries = 0;
  var gameOver = false;
  // Check if the event listener works when you click on a column
  $('.game-board').on('click', ".column:not('.column-Predator, .column-Alien')", function(event) {
    tries += 1;
    console.log(tries)
      //Create a variable that can store the current event handler.
      //Have prefixed it with $ so I can identify it later.
    var $column = $(event.currentTarget);
    $column.addClass('column-' + currentPlayer);


    var location = $column.attr('id')
    playersChosenMoves[currentPlayer].push(location)


    for (var i = 0; i < possibleCombos.length; i++) {
      var combo = possibleCombos[i]
      var playerMoves = playersChosenMoves[currentPlayer]
      var matches = []

      for (var j = 0; j < combo.length; j++) {
        var present = playerMoves.indexOf(combo[j]) > -1; // will return true/false, i.e. it is in the array or not
        matches.push(present)
      }

      if (matches.indexOf(false) === -1) {
        gameOver = true;
        swal({
          title: currentPlayer + ' Wins!',
          text: "Click Fight Again! to play another game.",
          imageUrl: "img/trophy-512.gif"
        });
      }
      if ((tries === 9) && (gameOver === false)) {
        swal('Draw!');
      }
    }
    if (currentPlayer === 'Predator') {
      currentPlayer = 'Alien';
    } else {
      currentPlayer = 'Predator';
    }
  });

  $('button').on('click', function() {
    $("div").removeClass("column-Predator");
    $("div").removeClass("column-Alien");
    playersChosenMoves = {
      'Predator': [],
      'Alien': []
    };
    tries = 0;
    gameOver = false;
  });

});
