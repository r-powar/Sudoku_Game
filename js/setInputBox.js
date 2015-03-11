function setInputBox(){
    var inputElements = document.getElementsByTagName('td');
    for(var prop in inputElements){
        if(inputElements[prop].innerHTML = " "){
            inputElements[prop].innerHTML += '<input class="cells" type="number" min="1" max="9"/>';
        }
    }
};
