


let cantidad=parseInt(prompt("cuantas veces quires jugar"));
for(i=1; i <= cantidad; i++){

    let jugada;
    let play = Math.floor(Math.random(0,2)*3)
    
    if (play == 0){
    jugada = "papel"
    }
    if (play == 1){
        jugada = "piedra"
     }
     if (play == 2){
        jugada = "tijera"
     }


let Humano=parseInt(prompt("elije  0.papel  1.piedra 2.tijera"));
let persona;
let res;
if (Humano == 0){
persona = "papel"
}
if (Humano == 1){
persona = "piedra"
 }
 if (Humano == 2){
persona = "tijera"
 }
 

 if(persona == "piedra" && jugada =="piedra"){
    res="Empate"
}
if(persona == "piedra" && jugada =="papel"){
 res=" Papel le gana a piedra, gana pc"
}
if(persona == "piedra" && jugada =="tijera"){
 res=" Piedra le gana a tijera, gana humano"
}
if(persona == "papel" && jugada =="papel"){
 res=" Empate"
}
if(persona == "papel" && jugada =="piedra"){
 res=" Papel le gana a piedra , gana humano"
}
if(persona == "papel" && jugada =="tijera"){
 res=" Tijera le gana a papel, gana pc"
}
if(persona == "tijera" && jugada =="tijera"){
 res=" Empate"
}
if(persona == "tijera" && jugada =="papel"){
 res=" Tijera le gana a papel, gana humano"
}
if(persona == "tijera" && jugada =="piedra"){
 res=" Piedra le gana a tijera, gana pc"
}
alert("pc marca=  "+jugada+"/ humano marca=  " + persona +"/"+ res);
}


