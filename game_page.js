player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score + " : ";
document.getElementById("player2_score").innerHTML = player2_score + " : ";

document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player2_name ;



function send() {
	getWord = document.getElementById("word").value;
	word = getWord.toLowerCase();
	console.log("palavra em caixa baixa = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

    questionWord = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  questionWord + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

questionTurn = "player1";
answer = "player2";



function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(answer == word)	
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}