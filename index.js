var col=document.getElementById("color");
var color=["#bdf64a","#d9df63","#ae67a4","#4ab0bb"];
var i=0;
function fun(){
    i=i< color.length ? ++i: 0;
   col.style.backgroundColor=color[i];
};