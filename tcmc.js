// navbar dropdown menu**********************************************************
var dropdown=document.querySelectorAll(".dropdown");

for(var i=0; i<dropdown.length; i++){
	dropdown[i].addEventListener("mouseover", function(){
	this.querySelector("a").style.color="#f50000";
	})
	dropdown[i].addEventListener("mouseout", function(){
	this.querySelector("a").style.color="#999999";
	})
}

//div2 left slide photos***********************************************************
var i=-1;//start point
var dot=document.querySelectorAll(".dot");
var imgs=document.querySelectorAll(".mainSlide");
var videos=document.querySelector(".videos");
var popMenu=document.querySelector("#pop-menu");

var dotRemove=function(){
	for(var i=0; i<imgs.length; i++){
			dot[i].classList.remove("dotSelect");
		}
}
var imgRemove=function(){
	for(var i=0; i<imgs.length; i++){
			imgs[i].style.display="none";
		}
}
function changeImg(){
	if(i<imgs.length-1){
		i++;
	} else {
		i=0;
	}
	dotRemove();
	dot[i].classList.add("dotSelect");
	// document.slide.src=imgs[i];
	imgRemove();
	imgs[i].style.display="block";	
	setTimeout("changeImg()", 3000);
}
function dotClick(n){
	dotRemove();
	dot[n].classList.add("dotSelect")
	imgRemove();
	imgs[n].style.display="block";
	i=n;
}
videos.addEventListener("click",function(){
	popMenu.style.marginTop="-85px";
	})
popMenu.addEventListener("click",function(){
	popMenu.style.marginTop="15px";
})
// Dvi3 slideShow ************************************************
var n=0; 
var photos=document.querySelectorAll(".smallPhoto");

var photoRemove=function(){
	for(var i=0; i<photos.length; i++){
			photos[i].style.display="none";
		}
}
function changePhoto(){
	if(n<photos.length-1){
			n++;
		} else {
			n=0;
		}
	photoRemove();	
	photos[n].style.display="block";
	setTimeout("changePhoto()", 5000);
}

var next=document.querySelector("#next");
var previous=document.querySelector("#previous");

next.addEventListener("click",function(){
	photoRemove();	
	if(n<photos.length-1){
		n=n+1;
	} else {
		n=0;
	}
	photos[n].style.display="block";
})
previous.addEventListener("click",function(){
	photoRemove();	
	if(n<=0){
		n=photos.length-1;
	} else {
		n=n-1;
	}
	photos[n].style.display="block";
})

window.onload=function(){
	setTimeout(function(){
		changePhoto();		
	},5000)
	changeImg();
}
