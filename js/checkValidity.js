var checkValidity = function(grid,row,col, value){
    return validSubRegion(grid,row,col, value) && validColumn(grid,row,col, value) && validRow(grid,row,col, value);
};

