("use strict");
console.log("Hello World")

function PlayGame()
{
	var player1 = window.prompt("Player1: Rock or Paper or Scissors?")
	while(player1 != "rock" && player1 != "paper" && player1 != "scissors")
	{
		player1 = window.prompt("Invalid Input! Check your spelling please :) \n rock. paper. scissors. ");
		player1 = player1.toLowerCase();
	}
	var player2 = window.prompt("Player2: Rock or Paper or Scissors?")
	while(player2 != "rock" && player2 != "paper" && player2 != "scissors")
	{
		player2 = window.prompt("Invalid Input! Check your spelling please :) \n rock. paper. scissors.");
		player2 = player2.toLowerCase();
	}
		if (player1 == null || player2 == null)
		{
			return;
		}

	player1 = player1.toLowerCase();
	player2 = player2.toLowerCase();

	if (player1 == player2)
	{
		alert("Its a tie")
		alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)
	}
		else if(player1 == "rock" && player2 == "paper")
		{
			alert("Player2 wins");
			alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)

		}
		else if(player1 == "rock" && player2 == "scissors")
		{
			alert("Player1 wins");
			alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)

		}
		else if(player1 == "paper" && player2 == "rock")
		{
			alert("Player1 wins");
			alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)

		}
		else if(player1 == "paper" && player2 == "scissors")
		{
			alert("Player2 wins");
			alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)

		}
		else if(player1 == "scissors" && player2 == "rock")
		{
			alert("Player2 wins");
			alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)

		}
		else if(player1 == "scissors" && player2 == "paper")
		{
			alert("Player1 wins");
			alert("player1 gave -> " + player1 + "\n and player2 gave -> " + player2)

		}else
		{
			console.log("Something is wrong!")
		}

}

