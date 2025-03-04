console.log("Hola mundo");

const mapa = new Map();
mapa.set('clau1','valor1');
mapa.set('clau2','valor2');
mapa.set('clau3','valor3');

console.log(mapa.get('clau1'));
console.log(mapa.size);

const nombre = [1, 2, 3, 4];
nombre.forEach((valor,index) => {
    console.log('El valor en la posicio '+index+' es ' + valor);
})

saludar('Anna');
saludar('Fred')

function saludar(nom){
    console.log("Hola "+ nom)
}

function multiplicacio(a,b = 1){
    return a * b;
}

console.log(multiplicacio(5,10));

const suma = function(a,b){
    return a + b;
}


console.log(suma(10,4));



function creaSalutador(nom){
    return function(){
        console.log('HOla '+ nom);
    };
}
const saludaJoan = creaSalutador('Joan');
saludaJoan();