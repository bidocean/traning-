("use stricy");
console.log("Hello World")
console.log("Hello Again")
console.log(Math.ceil (Math.random()*25));

var randomArr=[];
for(var i=0; i<10; i++){
	randomArr.push(Math.floor(Math.random()*101));
}
 console.log(randomArr);


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


 /*for( var row=0; row<5; row++){
 	console.log("row");
	 for(var col=0; col<10; col++){
	 	console.log("col");
	 }
 }*/


var myTable=document.getElementById("Data");
for(var i=0;i<8;i++){
	var row=document.createElement("tr");
	myTable.append(row);
	
	for(var ii=0; ii<8; ii++){
		var col=document.createElement("td");
		//Style rules for even rows
		if(i%2==0){			
			if(ii%2==0)
				col.setAttribute("class","tableData1");
			else
				col.setAttribute("class","tableData2");
		}
		//Style rules for odd rows
		else{
			if(ii%2 !=0)
				col.setAttribute("class" ,"tableData1");
			else
				col.setAttribute("class" ,"tableData2");				
		}

		row.append(col);
	}
}





var arrNum=[1,2,3,4,5,6,7,8,9,10];
var arrSpecialChar=["@","#","%","&","!"];
function checkPass(){
	var checkPass=document.getElementById("pass").value;
	var condMet=0;
	if(checkPass.length>=8){
		condMet+=1;
	}
	for(var i=0; i<arrNum.length; i++){
		if(checkPass.includes(arrNum[i])){
			condMet+=1;
			break;
		}
	}
	for(var i=0; i<arrSpecialChar.length; i++){
		if(checkPass.includes(arrSpecialChar[i])){
			condMet+=1;
			break;
		}
	}
	if(condMet==3)
		alert("it works")
	else
		alert("no");
}
 


	

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

splitString("catat1tatatast","a");

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
  console.log(checkEmail("sunnybalmiki6@gmail.com"))
 function emailAlert(){
 if(checkEmail(document.getElementById("Email").value))
 alert("good");
 else 
 alert("Bye Bye")	
 }


function indexAt(str,char){
	for(var i=0; i<str.length; i++){
		if(str.charAt(i)==char){
			console.log(i)
			break;
		}
	}
}
indexAt("horseseseses", "s");

function include(str,char){
	for(var i=0; i<str.length; i++){
		if(str.charAt(i)==char)
			return true;
	}
	return false;
}
 
 console.log(include("horse", "e"));

 function sliceString(str,start,stop){
 	var word="";
 	for(var i=start; i<=stop; i++){
 		word +=str[i];
 	}
 	console.log(word);
 }
 sliceString("horse", 2,4);

 function replace(str,index,newChar){
 	var str1=str.slice(0,index)
 	var str2=str.slice(index+1,str.length);
 	console.log(str1+newChar+str2);
 }

  replace("cat",2,"p");



  function modString(val){
  	if( typeof val !="string"){
		console.log("please use a string");
		return;
    }
   	this.val=val,
   	this.modSlice=function(start,stop){
   		var newVal="";
   		for(var i= start; i<= stop; i++){
   			newVal+=this.val[i];
   		}
   		this.val=newVal;
   		},
   		this.lastIndex=function(char){
   			for(var i=this.val.length; i>= 0; i--){
   				if(this.val.charAt(i)==char){
   					console.log(i)
   					break;
   				}
   			}
   			
   		}
   		this.countLength=function(){
   			var count=0;
   			while(this.val[count]!=undefined){
   				count++;

   			}
   	console.log(count);
   }
}

  var myString=new modString("this is my string");
  var babyCat=new modString("kitten");
  babyCat.countLength();
  myString.countLength()
  myString.lastIndex("y")
  myString.modSlice(1,4);
  console.log(myString.val);




  







