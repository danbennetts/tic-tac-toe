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
  // Check if the event listener works when you click on a column
  $('.game-board').on('click', ".column:not('.column-Predator, .column-Alien')", function(event) {
    //Create a variable that can store the current event handler.
    //Have prefixed it with $ so I can identify it later.
    var $column = $(event.currentTarget);
    $column.addClass('column-' + currentPlayer);


    var columnIndex = $('.game-board .column').index($column);
     var currentPlayerColumn = playersChosenMoves[currentPlayer]
     currentPlayerColumn.push(columnIndex);
     console.log(playersChosenMoves);


     for (var i = 0; i < possibleCombos.length; i++) {
       var combo = possibleCombos[i]
       var playerMoves = playersChosenMoves['Predator']
       var matches = []

       for (var j = 0; j < combo.length; j++) {
         var present = playerMoves.indexOf(combo[i]) > -1; // will return true/false, i.e. it is in the array or not
         matches.push(present)
       }

       if (matches.indexOf(false) === -1) {
         alert('You have won!')
         console.log(matches[i]);
       }// then here you can check to see if the matches array has 3 'true's in it
     }






    //  $.each(possibleCombos, function(index, combination) {
    //     //Check to see if the player has all of the squares first
    //     var hasAllColumns = true;
     //
    //
    //     $.each(combination, function(index, column) {
    //       // If the player's chosen squares does not contain the current square
    //       if ($.inArray(column, currentPlayerColumn) === -1) {
    //         hasAllColumns = false;
    //       }
    //     });
     //
    //     // Display the winner
    //     if (hasAllColumns) {
    //       swal({   title: currentPlayer + ' Wins!',   text: "Click Fight Again! to play another game.",   imageUrl: "img/trophy-512.gif" });;
    //     }
    //   });

    //We need to be able to swap players, a conditional maybe?
    if (currentPlayer === 'Predator') {
      currentPlayer = 'Alien';
    } else {
      currentPlayer = 'Predator';
    }
  });

  $('button').on('click', function () {
      $("div").removeClass("column-Predator");
      $("div").removeClass("column-Alien");
  });

});
