var solveSudoku = function(grid){
    var emptyPosition = findEmptyPositions(grid);
    var row,
        col,
        done,
        value;

    for(var i = 0; i < emptyPosition.length;){
        row = emptyPosition[i][0];
        col = emptyPosition[i][1];
        value = grid[row][col] + 1;
        done = false;

        while(!done && value < 10){
            if(checkValidity(grid,row,col,value)){
                done = true;
                grid[row][col] = value;
                i++;
            }
            else{
                //grid[row][col] = 0;
                value++;
            }
        }

        if(!done){
            grid[row][col]= 0;
            i--;
        }

    }

    //console.log(grid);
    return grid;
};