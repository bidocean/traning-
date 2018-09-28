("use strict")

// nested table

var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
var myTable= document.getElementById("nestedTable");
var data = [];
/*for(var i=0;i<4;i++)
{
	var row=document.createElement("tr");
	myTable.append(row);
	
	for(var ii=0;ii<4;ii++)
	{
		var col=document.createElement("td");
		if(i%2==0){
			if(ii%2==0)

			col.setAttribute("class","class1");
		else if(ii%2!=0)
			col.setAttribute("class","class2");
	} else if(i % 2 != 0){
		if(ii%2==0)
			col.setAttribute("class","class2");
		else if(ii%2!=0)
			col.setAttribute("class","class1");
	}
	data.push(col);
	row.append(col);
}
}
var dataInd = 0;
var randInd;
while(chars.length > 0){
	var randInd = Math.floor(Math.random() * chars.length);
	data[dataInd].innerHTML = chars[randInd];
	chars.splice(randInd, 1);	
	dataInd++;
}


$("input").dblclick(function(){
	alert("Your first name is:"+ $("#t1").val() + "\n" +"Your last name is:"+$("#t2").val());
});

//Stop button

    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });

//Square

$("#b2").click(function(){
        $("div").animate({
            left: '750px',
        });
 });
 //Background color
$("#change").click(function(){
	if($(".para").css("background-color")== "rgba(0, 0, 0, 0)" ){
		$(".para").css("background-color" ,"tomato")
	}
	else{
		$(".para").css("background-color" ,"rgba(0, 0, 0, 0)")
		}
});


function PlayGame(){
	var randNum =Math.floor(Math.random()*20)+1;
	var userInput = window.prompt("please enter number 1 to 20")
	var guess = 1;
	while(userInput != randNum){
		if(userInput<randNum){
			alert("Too Low")
			userInput=window.prompt("please enter number 1 to 20")
			guess++}
		if(userInput>randNum){
			alert("Too High")
			userInput=window.prompt("please enter number 1 to 20")
			guess++
		}
		
	}
	alert("Congrats~!~!~!"+guess)
	if(guess){
		alert("Nice")
	}
	if(guess){
		alert("Not Nice")

	}
	else{
		alert("Freeze")
	}
}


//palindrome 

$("#plainButton").click(function(){
	var word= $("#palinDrome").val();
	word=word.toLowerCase();
	word=word.replace(" ", "")
	word=word.replace("  ", "")
	console.log(word)



	var arr=word.split("")
	console.log(arr)

	var arr2= arr.reverse();
	console.log(arr2)

	var newString=arr2.join("");
	console.log(newString)
	if(word==newString){
		console.log("palinDrome")
	}
	else
	{
		console.log("Not a palinDrome")

	}

});*/



$(document).ready(function(){
    $("input").keydown(function(){
        $(this).css("background-color", "red");
    });
    $("input").keyup(function(){
        $(this).css("background-color", "skyblue");
    });
});



 var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","?","/","<",">"];

 var pass="";
 	var iter=Math.floor(Math.random()*5) + 12;
 for(var i=0; i<iter; i++){

 	var index= Math.floor(Math.random()*chars.length);

 	if(Math.random() > 0.5 && index < 26){

 	pass=pass+chars[index].toUpperCase();
 	}

 		else{
 			pass+=chars[index];
 		}
 	}
 
 console.log(pass);


var arrNum=[1,2,3,4,5,6,7,8,9,10];
var arrSpecialChar=["@","#","%","&","!"];
function checkPass(str){
	var condMet=0;
	if(str.length>=8){
		condMet+=1;
	}
	for(var i=0; i<arrNum.length; i++){
		if(str.includes(arrNum[i])){
			condMet+=1;
			break;
		}
	}
	for(var i=0; i<arrSpecialChar.length; i++){
		if(str.includes(arrSpecialChar[i])){
			condMet+=1;
			break;
		}
	}
	if(condMet==3)
		alert("it works")
	else
		alert("no");
}
/* 


	

var testString="dsf@ghd@gg@he";
var testString=testString.split("@")
console.log(testString);



function splitString(str, splitAt)
{
	var output=[];
	var lastIndex=0;
	for(var i=0; i<str.length; i++){
		if(str.charAt(i)==splitAt){
			var addString=str.slice(lastIndex,i);
			output.push(addString);
			lastIndex=i+1;

		}
	} 
			var lastString=str.slice(lastIndex,i);
			if(lastString.length!=0);
			output.push(lastString);
			console.log(output);
}

splitString("catat1tatatast","a");*/

function checkEmail(str){
	if(str.charAt(0)== "@")
		return false;
	var arr1=str.split("@");
	if(arr1.length!=2)
		return false;
	if(!arr1[1].includes("."))
		return false;
	for(var i=0; i<26;i++){
		if(str.endsWith(chars[i])){
			return true;
		}
	}
	return false;
		
}
/*  console.log(checkEmail("sunnybalmiki6@gmail.com"))
 function emailAlert(){
 if(checkEmail(document.getElementById("Email").value))
 alert("good");
 else 
 alert("Bye Bye")	
}*/

$(document).keyup(function(){
	var fname = false;
	var lname = false;
	var password=false;
	var EmailId=false;
	var PhoneNumber= false;

fname=validfname($("#fname").val());
lname=validlname($("#lname").val());
password=validpassword($("#password").val());
EmailId=validEmailId($("#EmailId").val());
PhoneNum=validPhoneNum($("#PhoneNum").val());



	if($("#t1").val().length > 0)
		fname = true;



	if(fname && lname && password && EmailId && PhoneNum){
		$("#error").removeAttr("disabled")
	} else {
		$("#error").attr("disabled", "disabled")
	}
})

function validfname(str){
	if(str==""){
		return false;
	}
	else{
		return true;
	}

}


function validlname(str){
	if(str==""){
		return false;
	}
	else{
		return true;
	}

}

function validpassword(str){
	if(str==""){
		return false;
	}
	else{
		return true;
	}

}

function validEmailId (str){
	if(str==""){
		return false;
	}
	else{
		return true;
	}

}

function validPhoneNum(str){
	if(str==""){
		return false;
	}
	else{
		return true;
	}

}

