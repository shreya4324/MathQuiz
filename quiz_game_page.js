    
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

number1 = localStorage.getItem("num1");
number2 = localStorage.getItem("num2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function checkResult() {
    number1 = localStorage.getItem("num1");
    number2 = localStorage.getItem("num2");
    
    actual_answer = parseInt(number1) * parseInt(number2);
    result = parseInt(document.getElementById("result").value);
    if(result == actual_answer){
        document.getElementById("Comment").innerHTML = "Yay it is correct";
    }else{
        document.getElementById("Comment").innerHTML = "Incorrect. Try again.";
    }

    //question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    //input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    //check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";

    //question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    //input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    //check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    //row =  question_number + input_box + check_button ; 
    //document.getElementById("output").innerHTML = row;
    //document.getElementById("number_1").value = "";
    //document.getElementById("number_2").value = "";
}

function displayQuestion()
{
    number1 = localStorage.getItem("num1");
    number2 = localStorage.getItem("num2");
    
    question = "<h4> Question: " + number1 + " x " + number2 + " </h4>";
    document.getElementById("Question").innerHTML = question;
}

function check()
{


}

function nextPage()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    localStorage.setItem("num1",number1);
    localStorage.setItem("num2",number2);
    window.location = "2_index.html";
}