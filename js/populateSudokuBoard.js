var populateSudokuBoard = function(grid){
    var elements = document.getElementsByClassName('cells');
    var flattened = grid.reduce(function(a,b){
        return a.concat(b);
    });

    for(var i = 0; i < flattened.length; i++){
        elements[i].value = flattened[i];
    }

    return grid;
};
