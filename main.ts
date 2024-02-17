type Odber = {
    time: number; //s
    power: number;  //watty
}

let data: Array<Odber> = [
    { time: 60, power: 3500, },
    { time: 120, power: 1500, },
    { time: 1580, power: 3570, },
    { time: 1000, power: 1500, },
    { time: 2780, power: 5000, },

    { time: 600, power: 3800, },
    { time: 1200, power: 1500, },
    { time: 1580, power: 1570, },
    { time: 1000, power: 1500, },
    { time: 2780, power: 5000, },
]

let price = 6.80;
let peceni: number = 0;
let dopeceno: boolean = false
for (let i: number = 0; i < data.length; i += 1) {
    let kwh: number = (data[i].power / 1000) * (data[i].time / 3600);

    const fullPrice: number = kwh * price;
    console.log( ' Celková cena: ' + fullPrice + ' Kc')
    console.log('Počet kilowatthodin: ' + kwh)
    
    
    peceni += 1
    
    console.log(peceni)
   if(data.length > i){
       const prumer = peceni / kwh
       console.log('Průměr kwh za  pečení: ' + prumer)
   }
}

