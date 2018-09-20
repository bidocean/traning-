'use strict';

/*console.log("Hello world");
var a=10;
if(a>5||3<2)
{
	console.log("cool");
}
*/

function Person(firstName,lastName,age,hobby){
	this.firstname=firstName,
	this.lastName=lastName,
	this.age=age,
	this.hobby=hobby
};

var paul=new Person("paul","Richard",25,"coding");
var Ravi=new Person("Ravi","Ranjan",23,"Gamming");
var Dhiraj=new Person("Dhiraj","Chettri",25,"Reading");
var sunny=new Person("sunny","Balmiki",25,"Football");
var friends=[paul,Ravi,Dhiraj,sunny];

var a= 10;
function FirstfFunction(num){
  
return num*num;

}
  var squarednum = FirstfFunction(4);
  
function FullName(alias){
	return alias.firstname+" "+alias.lastName;
}

function NameAndHobby(arr){

	for(var i=0; i<arr.length; i++){
		console.log(arr[i].firstname + " likes to do " +arr[i].hobby);
	}
}
function FindEvenNumbers(num){

	for(var j=0; j<=num;j++){

		if(j%2 ==0){
			console.log(j);
		}
	}
}



function BiggerNumber(){

	var a=window.prompt(" Feed me the first number");
	if(a==null)
		return;

	while(isNaN(a) || a.length==0){
		a = window.prompt(" That's not a number please try again"); 	
	}
	a=parseInt(a);
	var b=window.prompt(" Feed me the first number");
	if(b==null)
		return;
	while(isNaN(b) || b.length==0){
		b = window.prompt(" That's not a number please try again"); 	
	}

	b=parseInt(b);

	
	if(a>b){
		console.log(a +" is the BiggerNumber");
	}else if(b>a){
		console.log(b +" is the BiggerNumber");
	} else{
		console.log("This are the same");
	}
}


var animals=["Monkey","tiger","elephant","leopard","Hippo","Horse", "hyena","Dolphin","Gorilla"];

function FindThe(arr){
for(var i=0; i<arr.length; i++){
	if (arr[i].charAt(0)=="H"||arr[i].charAt(0)=="h") {
		console.log(arr[i]);
	}
}

}
//FindThe(animals);



function AverageAge(arr){
	var TotalAge=0;
	for(var i=0; i< arr.length; i++){
		TotalAge+= arr[i].age;

	}console.log(TotalAge/arr.length);
}

//AverageAge(friends);

/*
function DivisibleBythree(num){
	for(var i=0; i<=num; i++){
		if (i%3==0) 
		console.log(i)
	}
}
DivisibleBythree(300)*/


function SecondNumber(arr){
	for(var i=0; i<arr.length; i++){
		console.log(i)
	  if(arr[i].charAt(1)=="o"||arr[i].charAt(1)=="o"){
	  	console.log(arr[i]);
	  }
	}
}
//SecondNumber(animals);

/*var EmptyArray=[];

function ArrayPush(){
	for(var i=1; i<=100; i++){
		EmptyArray.push(i)
		
	}
} 
ArrayPush();

console.log(EmptyArray)*/


var NewMath ={
	SquareIt :function(num){

		return num*num
	},
	squareRoot: function(num){
		return Math.sqrt(num);
	},
	power: function(base,power){
		var inputBase=base;

		for(var i=0; i< power; i++){
			base=base*inputBase;
		}
		return base;
	},
	calculator: {
		Add :function(num1, num2){
			return num1+num2;
		},
		Subtract :function(num1,num2){
		return num1-num2;
		},
		Multiply:function(num1,num2){
			return num1*num2;
		},
		Devide : function(num1,num2){
			return num1/num2;
		}

	
	},
	sumAll: function(arr){
		var sum=0;
		for(var i= 0; i<arr.length; i++){
		 sum+=arr[i];
		}
		return sum;
	},
	FindMax :function(arr){
		var max= -Infinity;
		for(var i=0; i<arr.length; i++){
			if(arr[i]>max){
				max=arr[i];
			}
		}
		return max;
	},
	FindMin:function(arr){
		var Min=Infinity;
		for(var i=0; i<arr.length; i++){
			if(arr[i]<Min){
				Min=arr[i];
			}
		}
		return Min;
	},
	Factorial: function(num){
		for(var i= (num-1); i> 0; i--){
			num=num *i;
			}
			return num;
		}

	}


console.log(Math.floor(Math.random() * 100) + 1)