console.log("Exercisi 1");

//let fruites = ['Taronja','Llimona','Poma','Platan','Melo'];
//fruites.forEach((valor,index) =>{
//    console.log("Index "+ index+" valor "+valor);
//});

console.log("Exercisi 2");
let contador = 1;
while(contador <= 5){
    console.log(contador);
    contador++;
}

console.log("Exercisi 3");
console.log(Math.random() * (1 + 100));

console.log("Exercisi4");
let num = 3;
if (num%2 == 0){
    console.log(num + " es parell");
}else{
    console.log(num + " no es parell");
}

console.log("Exercisi5");
function saludar(nom){
    console.log("Hola "+nom);
}
saludar("Rafel");

console.log("Exercisi6");
let cercle = 20;
let radi = cercle /(2 * Math.PI);
console.log("El radi es "+ radi);

console.log("Exercisi6");
let nume = 2;
let num2 = 2;
let sum = nume + num2;
let rest = nume - num2;
let mult = nume * num2;
let div = nume/num2;
console.log("Suma ="+sum+" Resta ="+rest+" Multiplicacio ="+mult+" Divisio ="+div);

console.log("Exercisi7");

let persona = {
    nom: 'Alfred',
    edad: 40,
    profesio: 'profesor'
};

console.log(persona);

console.log('Exercisi8');

let compar1 = 2
let compar2 = 3;
if(compar1 > compar2){
    console.log(compar1 +" > "+ compar2);
}else if(compar1<compar2){
    console.log(compar1+" < "+ compar2);
}else{
    console.log(compar1 +" = "+ compar2);
}

console.log('Exercisi9');

console.log('Exercisi10');

let numeros = [10,5,2,8,4];
let sumar = 0;
for(let contador1 = 0;contador1 < numeros.length;contador1++){
    sumar = sumar + numeros[contador1];
        console.log(sumar);
}

console.log('Exercisi11');

let cotxe = {
    marca: 'citroen',
    any: 2010,
    model: 'c300'
};

if((2025-cotxe.any) > 10){
    console.log("Te mes de 10 anys");
}else{
    console.log("Te menys de 10 anys");
}

console.log("Exercisi12");
let strin = "Hola"
let numrepet = 10;
for(contador = 0; contador < numrepet; contador++){
    console.log(strin);
}

console.log("Exercisi13");
let calificacion = 10;
let notas = null;

switch (calificacion){
    case 0 :
        notas = 'F';
        break;
    case 1 :
        notas = 'F';
        break;
    case 2 :
        notas = 'F';
        break;
    case 3 :
        notas = 'F'
        break;
    case 4:
        notas = 'F';
        break;
    case 5:
        notas = "C";
        break;
    case 6:
        notas = "B";
        break;
    case 7:
        notas = "B";
        break;
    case 8:
        notas = "A";
        break;
    case 9:
        notas = "A";
        break;
    case 10:
        notas = "A";
        break;
}
console.log(notas);

console.log("Exercisi14");

let adivinar = Math.floor(Math.random() * 10);
let intento = 6;
if(intento == adivinar){
    console.log("Has guanyat");
}else{
    console.log("Game over");
}

console.log("Exercisi18");

let parells=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(let contador = 0;contador < parells.length;contador++){
    console.log(parells[contador]);
    if(parells[contador] % 2 ==0){
        console.log("Es parell");
    }else{
        console.log("No es parell");
    }
}

console.log("Exercisi19");

let biblioteca = ["El señor de los anillos","Harry poter","Las cronicas de narnia"];
let titols = biblioteca;
console.log(titols);

console.log("Comprovar si un número és primer")

let primer = 7;
for(contador = 1;contador < primer; contador++){
    if(primer % contador == 0){
        console.log("no es primer");
        break;
    }else{
            console.log("es primer")
    }

}

console.log("Trobar els números parells i calcular la seva suma");

let primer1 = 7;

for(contador = 1;contador < primer1; contador++){
    if((primer % contador) == 0){
        console.log("no es primer");
        break;
    }else{
            console.log("es primer")
    }


}
let sumprimer = 0;
for(contador = 1;contador <= primer1; contador++){
    sumprimer= sumprimer + contador
    console.log(sumprimer);
}


console.log("Trobar la longitud de la cadena mes llarga");

let lletra = ["Moix","Gossos","Persona"];

if(Math.max(lletra[1].length,lletra[0].length,lletra[2].length) == lletra[1].length){
    console.log([lletra[1]]);
}else if(Math.max(lletra[1].length,lletra[0].length,lletra[2].length) == lletra[0].length){
    console.log(lletra[0]);
}else if(Math.max(lletra[1].length,lletra[0].length,lletra[2].length) == lletra[2].length){
    console.log(lletra[2]);
}else{
    console.log("No hi ha maxim");
}

console.log("Crea un acrostic");

let str = "Buenas"
let acrostic = str.split("");
console.log(acrostic);

console.log("Es un anagrama?");
let palabra1 = "agranda";
let palabra2 = "granada";
let comprovacio1 = palabra1.split("");
let comprovacio2 = palabra2.split("")
console.log(palabra1[1]);
console.log(comprovacio2.length);


if(comprovacio1.length == comprovacio2.length){
    let comprovat = 0;
    for(let contador = 0; contador <comprovacio1.length;contador++){
        if (palabra1[comprovat] == palabra2[contador]){
            comprovat++;
        }
        if(contador == comprovacio1.length - 1){
            if(comprovat != comprovacio1.length - 1){
                console.log("No es anagrama");

            }else{
                console.log("Si es anagrama");
            }
        }
    }
}else{
    console.log("No es anagrama");
}

console.log("Trobar palidroms");

let palabra = "aibofobia";

let palindrom = palabra.length;
for(let cont= 0; cont < palabra.length; cont++){
    console.log(palabra);
    console.log(palindrom);
    if(palabra[cont] != palabra[palindrom]){
        console.log("No es un  palindrom");
    }else{
        palindrom--;
    }
    if(palindrom = 1){
        console.log("Es un palindrom");
    }
}

console.log("Contrasenya");

function password(texte){
    if (texte!= "2Fj(jjbFsuj" || texte !="eiZiugBf&g9" ){
        location.replace(texto+".htm");
    }
}