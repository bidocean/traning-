"use strict";
console.log("Hello");

var header =document.getElementById("mainHeader");

header.innerHTML = "Now Its a variable";

header.id="jsId";

var header2s =document.getElementsByTagName("h2");
console.log(header2s);


for(var i= 0; i<header2s.length; i++){
	header2s[i].innerHTML="This is header: " +(i+1);
}
var smallHeads =document.getElementsByClassName("smallHead");

for(var j =0; j<smallHeads.length; j++){
	smallHeads[j].style.fonsSize ="20px"
}



var smallPs =document.querySelectorAll("p.smallHead");



var dateDiv= document.getElementById("dateContainer");

function AddDate(){

	var dateP=document.createElement("p");
	dateP.append(Date());
	dateP.setAttribute("class","dateP");
		dateDiv.append(dateP);
	

	}


	var inputText=document.getElementById("inputText");
 function InputFocus(){
 	inputText.style.backgroundColor ="skyblue";
 }
 function InputBlur(){
 	inputText.style.backgroundColor ="white";
 }
 var letterCount = document.getElementById("letterCount");
 function LetterCount(){
 	letterCount.innerHTML = inputText.value.length;
 }
 function SetSize(){
 	inputText.style.width="400px";
 	inputText.style.height="100px";
 }

 var mainImg=document.getElementById("mainImg");
 var thumbImages=document.getElementsByClassName("thumbImg"); 

 function ChangeImage(sender){
 	for(var i=0; i<thumbImages.length; i++){
 		var currentId="img" +i;
 		if(sender.id==currentId){
 			var currentImg=document.getElementById(currentId);
 		}
 	}
 	mainImg.src=currentImg.src;
 }
 
 var timer=document.getElementById("timer");
 var seconds=0;
 var minutes=0;
 function countTime(){
 	seconds+=1;
 	if(seconds<10){
 		var secondcounter="0"+ seconds;
 	} else{
 		secondcounter=seconds;
 	}
 	if(seconds%59==0){
 		seconds=0;
 		minutes+=1;
 	}
 	if(minutes==1){
 		var minuteString=" minute";
 	}else{
 		minuteString=" minutes"
 	}
 	timer.innerHTML="How long have I been here "  + minutes+":"+secondcounter+ minuteString;
 	setTimeout(countTime, 1000);

 }
 countTime();

var bigmessage=document.getElementById("bigmessage")
 setTimeout(function(){
bigmessage.style.display="block";
 },3000)
 

function closeMessage(){
bigmessage.style.display="none";
}