player_1=localStorage.getItem("player1")
player_2=localStorage.getItem("player2")

player_1score=0
player_2score=0

document.getElementById("player1_name").innerHTML=player_1 + " : "
document.getElementById("player2_name").innerHTML=player_2 + " : "

document.getElementById("player1_score").innerHTML=player_1score 
document.getElementById("player2_score").innerHTML=player_2score 

document.getElementById("player_question").innerHTML="question turn- "+ player_1
document.getElementById("player_answer").innerHTML="Answer turn- "+ player_2

function send() {
   number1=document.getElementById("number1").value
   number2=document.getElementById("number2").value
   answer=parseInt(number1)*parseInt(number2)
    question_word="<h4>"+ number1+"X"+number2+"</h4>"

    input_box="<br>Answer : <input type='text' id='input_box'>"

    check_btn="<br><br> <button class='btn btn-info' onclick='check()'>check</button>"

    row=question_word+input_box+check_btn

    document.getElementById("output").innerHTML=row

    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}

question_turn="player_1"
answer_turn="player_2"

function check() {
    get_answer=document.getElementById("input_box").value;
   

    if(get_answer==answer) {
        if(answer_turn=="player_1") {

            player_1score=player_1score+1

            document.getElementById("player1_score").innerHTML=player_1score
        }
        else{
            player_2score=player_2score+1

            document.getElementById("player2_score").innerHTML=player_2score 
        }
    }
    if(question_turn=="player_1") {
        question_turn="player_2"

        document.getElementById("player_question").innerHTML="question turn- "+player_2
    }
    else{
        question_turn="player_1"

        document.getElementById("player_question").innerHTML="question turn- "+player_1
    }
    if(answer_turn=="player_1") {
        answer_turn="player_2"

        document.getElementById("player_answer").innerHTML="answer turn- "+player_2
    }
    else{
        answer_turn="player_1"

        document.getElementById("player_answer").innerHTML="answer turn- "+player_1
    }
    document.getElementById("output").innerHTML=""
}