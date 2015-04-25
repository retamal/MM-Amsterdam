var historia1 = document.createElement("audio");
var historia2 = document.createElement("audio");
var historia3 = document.createElement("audio");
var historia4 = document.createElement("audio");

if (historia1 != null && historia1.canPlayType && historia1.canPlayType("audio/mpeg"))
{
    historia1.src = "../recursos/sonidos/historia1.mp3";    
    historia2.src = "../recursos/sonidos/historia2.mp3"; 
    historia3.src = "../recursos/sonidos/historia3.mp3"; 
    historia4.src = "../recursos/sonidos/historia4.mp3"; 
} 

var sonando=false;

function audio1(){
    if(sonando){
        sonando=false;
       historia1.pause(); 
    }else{
        sonando=true;
        historia1.play();
    }    
}
function audio2(){
    if(sonando){
        sonando=false;
       historia2.pause(); 
    }else{
        sonando=true;
        historia2.play();
    }    
}
function audio3(){
    if(sonando){
        sonando=false;
       historia3.pause(); 
    }else{
        sonando=true;
        historia3.play();
    }    
}
function audio4(){
    if(sonando){
        sonando=false;
       historia4.pause(); 
    }else{
        sonando=true;
        historia4.play();
    }    
}