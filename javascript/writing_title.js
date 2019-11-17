var arr = ["Bienvenue sur mon Portfolio", "Johan Baker", "Etudiant analyste en génie informatique"]

var elem = document.getElementById("titre")

var i = 0
var j = 0

var writeEffect = setInterval(function (){
  i++
  if(j == arr.length){
    clearInterval(writeEffect)
  }
  if(i > arr[j].length+5){
    j++
    i = 0
  }
  elem.innerHTML = arr[j].slice(0, i);
}, 130);