var validRow = function(grid,row, col, value){
    var valid = true;
    for(var i = 0; i < 9; i++){
        if(grid[row][i] == value){
            valid = false;
        }
    }
    return valid;
};
