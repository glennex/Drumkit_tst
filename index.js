for (var i=0; i<7; i++){

document.querySelectorAll("button")[i].addEventListener("click", clickhandle)
}

function clickhandle(){

// this.style.color="white";    //this ---> used to get the identity of the button that triggered the event.

var buttonInnerHtml=this.innerHTML;

makesound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml)
}


document.addEventListener("keypress", clickhandle2)

function clickhandle2(){
    makesound(event.key);
    buttonAnimation(event.key);
}


function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
    
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
    
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
    
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(currentkey){
var activeButton=document.querySelector("."+ currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}

