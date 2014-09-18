/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(N) {

  var newBoard = new Board({n:N});
  var allRowCombos = [];
  for(var i = 0; i < N; i++) {
    rowCombo = [];
    for(var j = 0; j < N; j++) {
      rowCombo.push(0);
    }
  rowCombo[i] = 1;
  allRowCombos.push(rowCombo);
  }


  for(var rowCounter = 0; rowCounter < N; rowCounter++ ) {
    for(var rowComboIndex = 0; rowComboIndex < allRowCombos.length; rowComboIndex++) {
      newBoard.set(rowCounter, allRowCombos[rowComboIndex]);
      if(!newBoard.hasAnyColConflicts()) {
        break;
      }
    }
  }
  if(newBoard.hasAnyColConflicts()) {
    return null;
  } else {
    return newBoard.rows();
  }

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(N) {
  var solutionCount = 0;
  var board = new Board({n:N})
  var findSolution = function(row) {
    if(row === N){
      solutionCount++;
      return;
    }
    for(var i = 0; i < N; i++){
      board.togglePiece(row,i);
      if(!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row,i);
    }
  }

  findSolution(0);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with N queens placed such that none of them can attack each other
window.findNQueensSolution = function(N) {
  var solution = undefined; //fixme


  var board = new Board({n:N})
  var findSolution = function(row) {
    if(row === N){
      solution = board.rows();
      return;
    }
    for(var i = 0; i < N; i++){
      board.togglePiece(row,i);
      if(!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row,i);
    }
  }

  findSolution(0);
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(N) {
  var solutionCount = 0; //fixme

  var board = new Board({n:N})
  var findSolution = function(row) {
    if(row === N){
      solutionCount++;
      return;
    }
    for(var i = 0; i < N; i++){
      board.togglePiece(row,i);
      if(!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row,i);
    }
  }

  findSolution(0);
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
