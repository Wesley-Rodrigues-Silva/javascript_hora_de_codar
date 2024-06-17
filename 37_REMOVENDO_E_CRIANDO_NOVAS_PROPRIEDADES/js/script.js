const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}

console.log(car);
car.doors = 4; // doors = portas, adicionei ao código 4 portas
console.log(car);

delete car.km
console.log(car);