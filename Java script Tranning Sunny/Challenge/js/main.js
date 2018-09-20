"use strict";
console.log("Hello!");



var dateDiv = document.getElementById("DateContainer");
var count = 1;

function AddDate(){
	var userInput = document.getElementById("myNumber").value;
	if(count > userInput)
		return;
	var currentDate = new Date();
	var date = document.createElement("p");
	date.append(currentDate);
	if(count % 2 == 0){
		date.setAttribute("class", "dateP");
	} else{
		date.setAttribute("class", "dateO");
	}
	dateDiv.append(date);
	count++;
	setTimeout(AddDate, 1000);
}



/*function AddDate(){


while (dateDiv.hasChildNodes()) {
    dateDiv.removeChild(dateDiv.lastChild);
}
var num = document.getElementById("myNumber").value;


	var dateBr = document.createElement("br");
	if(num>=1000000)
	{
		 alert("Really? Try again with lower number. Thanks.");
		 return;
	}
	else
	{
	for(var i=0; i<num; i++)
	{

	var dateP = document.createElement("p");
	dateP.append(new Date());
	dateP.setAttribute("class", "dateP");
	dateDiv.append(dateP);
	if(i%2 == 0){
			dateP.setAttribute("class", "dateO");

	}
	}
	}
	
}*/
