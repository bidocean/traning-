"use	 strict";
console.log("Hello Sikkim");

function ShowContent(index){
	var dropList = document.getElementsByClassName("dropDownContent");
	if(dropList[index].style.display == "block")
	{
		dropList[index].style.display = "none";
	}
	else{ 
		dropList[index].style.display = "block";
 	}
}
var popUp=document.getElementById("PopUp");
function ShowPopUp()
{

	popUp.style.display="block";
}
function ClosePopUp()
{
	popUp.style.display = "none";
}

