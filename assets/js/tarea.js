// let carrera = [
//     {nombre:"Roberto", lugar: 1}, 
//     {nombre:"Andrea", lugar: 5},
//     {nombre:"Jorge", lugar: 3},
//     {nombre:"Ramiro", lugar: 2},
//     {nombre:"Sofía", lugar: 4},
// ];

// console.log(carrera);

// carrera.sort( (a,b) => {
//     if(a.lugar < b.lugar) {
//         return -1;
//     }
// });

// console.log(carrera);

// carrera.shift();
// console.log(carrera);

// carrera.push({nombre:"José", lugar:6});
// console.log(carrera);

let runners = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];

const jorge = runners.splice(2, 1);

runners.unshift(jorge[0]);

const ramiro = runners.splice(3, 1);

runners.unshift(ramiro[0]);

runners.splice(2, 1);

const andrea = runners.splice(2, 1);

runners.push(andrea[0]);

runners.push("José");

console.log(runners)