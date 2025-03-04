const date = new Date();
    let year = date.getFullYear();

console.log("concesionari");
function vehicle(marca,model,any){
    this.marca = marca;
    this.model = model;
    this.any = any;
}


function cotxe (model,marca,any,portes){
    vehicle.call(this,model,marca,any);
    this.portes = portes;
    this.mostraDetalls = function(){
        console.log(`Marca: ${this.marca},Model ${this.model}, Any ${this.any}, ${this.portes} portes`);
    }
}



let toyota = Object.create(cotxe);

toyota.marca = "Toyota";
toyota.model = "Corola";
toyota.any = 2015;
toyota.portes = 4;

console.log(toyota);

let moto = Object.create(vehicle);

moto.marca = "";
moto.model = "";
cotxe.any = null;
moto.tipus = "";

let camion = Object.create(vehicle);

camion.marca = "";
camion.model = "";
camion.any = null;
camion.capacitat = null;

let Yamaha = Object.create(moto);

Yamaha.marca = "Yamaha";
Yamaha.model = "R1";
Yamaha.any = 2020;
Yamaha.tipus = "Esportiva"