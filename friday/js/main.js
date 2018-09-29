 ("use strict")
 console.log("Hi Again");
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
	var Username = false;
	var EmailId=false;
	var password=false;
	

Username=validUsername($("#username").val());
EmailId=validEmailId($("#EmailId").val());
password=validpassword($("#password").val());



	if($("#t1").val().length > 0)
		Username = true;



	if(Username && EmailId &&password  ){
		$("#error").removeAttr("disabled")
	} else {
		$("#error").attr("disabled", "disabled")
	}
})

function validUsername(str){
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


