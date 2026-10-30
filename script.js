let input = document.getElementById("input");
let botonAdivinar = document.getElementById("adivinarButton");
let Random;

Random = Math.floor(Math.random() * 899) + 100;

botonAdivinar.addEventListener("click", function(){
console.log(input.value.split(""));
splitRandom = String(Random).split("");
console.log(splitRandom);
console.log(splitRandom[0]);
console.log(input.value[0]);

for(i=0; i<=3; i++){
    
}

})

