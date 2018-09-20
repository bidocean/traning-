"use strict";
console.log("Hello World");
function AreaOfRectangle(num1,num2){
console.log(num1*num2)
}
AreaOfRectangle(4,8)

function AvgArr(arr)
{
	var total=0;
	for(var i=0; i<arr.length; i++)
	{
		total=total+arr[i];

	}
		console.log(total/arr.length)

}
 AvgArr([10,20,30,40]);


 function DivisibleByThree(num)
 {
 	if(num%3==0)
 	{
 		console.log("DivisibleBy3");
 	}
 	else
 	{
 		console.log(num+"is notbDivisibleBy3");

 	}

}
DivisibleByThree(12);
 
function DivisibleByFive(num)
{
 if (num%5==0)
 {
 	console.log("DivisibleBy5")

 }
 	else
 	{
 		console.log(num + "is notbDivisibleBy5");
 	}





} DivisibleByFive(26);





function sin(num)
{ if(num==0)
	{
		console.log("is Zero")
	}
	else if (num>0)
	{
		console.log("Number is positive")
	}
	else
	{
		console.log("number is negative")
	}
	







}
sin(25);


var months=["january","february","march","april","may","june","july","august","september","october","november","december"];
function MonthsNumber(month){
	var a=month.toLowerCase();
	for(var i=0;i<months.length;i++){
		if(month==months[i])	{
		months[i] += i++;
		}
	console.log(months[i]);
	}
}


MonthsNumber("september");

function LongestWord(arr){

var maxLength=+Infinity;
var longestString;
for(var i=0;i<arr.length;i++){
	if(arr[i].length>maxLength){
		maxLength=arr[i].length;
		longestString=arr[i];
	}
}
console.log("The longest word is"+longestString);

}
LongestWord(["dgbdgjlkdnkdng","gsdgdjgndkgd"]);



function WordCounter(){
	for(var i=0; i<50;i++){
		var textArea=document.getElementById("textArea");
		 var textArea=[];
		 v
	}
}




 