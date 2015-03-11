setInputBox();
document.getElementById('btn').onclick = function () {
   populateSudokuBoard(grid);
};

document.getElementById('btn2').onclick = function(){
    solveSudoku(grid);
    populateSudokuBoard(grid);
};

