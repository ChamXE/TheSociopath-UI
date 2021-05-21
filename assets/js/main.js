function checkRadioButton() {
    if (document.getElementById('randomizeY').checked) {
        document.getElementById('you').disabled = true;
        document.getElementById('crush').disabled = true;
    }
    else {
        document.getElementById('you').disabled = false;
        document.getElementById('crush').disabled = false;
    }
}

function printInputBox(){
    document.getElementById('toPrint').innerHTML = "";
    if(document.getElementById('numOfRelationships').value == ""){
        alert("Please enter an amount!");
    }
    else {
        var num = document.getElementById('numOfRelationships').value;
        document.getElementById('submit').disabled = false;
        var i;
        for(i=0; i<num; i++){
            document.getElementById('toPrint').innerHTML += "<div class=\"input-group mb-3\" style=\"margin-top: 1%\"><div class=\"input-group-prepend\" style=\"margin-top: auto; margin-left: 41.5%; margin-bottom: auto;\"><span class=\"input-group-text\" id=\"basic-addon1\">Relationship " + (i+1) + "</span></div><input type=\"text\" class=\"form-control\" placeholder=\"e.g. 1\" aria-label=\"relationship\" id=\"r" + i + "\" aria-describedby=\"basic-addon1\" style=\"max-width: 14.1%;\"></div>";
        }
    }
}

function event1(){
    if(document.getElementById('proceedEventY').value == "" && document.getElementById('proceedEventN').value == ""){
        alert("Please choose to either auto-run Event 2 or no!");
    }
    else {
        if(document.getElementById('teacher').value == ""){
            alert("Please fill in teacher name!");
            break;
        }
        if(document.getElementById('student').value == ""){
            alert("Please fill in student name!");
            break;
        }
        /*
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/api/event1",
            data: {
                'teacher': teacher,
                'student': student
            },
            cache = false
        }).done(function(html));
        */
    }
    // return false;
}