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
for(var i=0;i<10;i++){
	var row=document.createElement("tr");
	myTable.append(row);
	for(var ii=0; ii<10; ii++){

		var col=document.createElement("td");
		if(i%2==0){
			
			col.setAttribute("class","tableData1");
			}
		else{
		col.setAttribute("class","tableData2");
		}
		row.append(col);
	}


}



