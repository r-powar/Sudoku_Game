var findEmptyPositions = function(grid){
    var emptyArray = [];

    for(var i = 0; i < 9; i++){
        for(var j =0; j < 9; j++){
            if(grid[i][j] == 0){
                emptyArray.push([i,j]);
            }
        }
    }
    return emptyArray;
};