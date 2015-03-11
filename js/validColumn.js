var validColumn = function(grid, row, col, value){
    var valid = true;
    for(var i = 0; i < 9; i++){
        if(grid[i][col] == value){
            valid = false;
        }
    }

    return valid;
};
