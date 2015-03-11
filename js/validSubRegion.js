var validSubRegion = function(grid,row, col,value){
    var valid = true;
    var size = 3;
    var topLeft = Math.floor(row/3);
    var colLeft = Math.floor(col/3);

    for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            var currRow = size * topLeft + i;
            var currCol = size * colLeft + j;
            if(grid[currRow][currCol] == value){
                valid = false
            }
        }
    }

    return valid;
};
