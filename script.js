let input = document.getElementById("input");
let botonAdivinar = document.getElementById("adivinarButton");
let Random;

Random = Math.floor(Math.random() * 8999) + 1000;

botonAdivinar.addEventListener("click", function(){
console.log(input.value.split(""));
splitRandom = String(Random).split("");
//console.log(splitRandom);

if(splitRandom[0] == input.value[0])
{
    if(splitRandom[1] == input.value[1])
    {
        if(splitRandom[2] == input.value[2])
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("Todos iguales");
            }
            else
            {
                console.log("3 digitos iguales");
            }
        }
        else
        {
            console.log("2 digitos iguales");
        }
    }
    else
    {
        if(splitRandom[2] == input.value[2])
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("3 digitos iguales");
            }
            else
            {
                console.log("2 digitos iguales"); 
            }
        }
        else
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("2 digitos iguales");
            }
            else
            {
                console.log("1 digito igual");
            }
        }
    }
}
else
{
    if(splitRandom[1] == input.value[1])
    {
        if(splitRandom[2] == input.value[2])
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("3 digitos iguales");
            }
            else
            {
                console.log("2 digitos iguales");
            }
        }
        else
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("2 digitos iguales");
            }
            else
            {
                console.log("1 digito igual");
            }
        }
    }
    else
    {
        if(splitRandom[2] == input.value[2])
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("2 digitos iguales");
            }
            else
            {
                console.log("1 digito igual");
            }
        }
        else
        {
            if(splitRandom[3] == input.value[3])
            {
                console.log("1 digito igual");
            }
            else
            {
                console.log("No pegaste una");
            }
        }
    }
}
})