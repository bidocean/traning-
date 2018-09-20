("use strict");
console.log("Hello Cartoons")

var mainImage=document.getElementById("mainImage");
var slide=document.getElementsByClassName("images");
var index=0;


function slideImage(){
	mainImage.src=slide[index].src;
	index++
 setTimeout(slideImage, 2000);
 if(index>(slide.length-1)){
 	index=0;
 }

}
slideImage();