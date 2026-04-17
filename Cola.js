
let cola = [];


cola.push(10);
console.log("Se agregó:", 10);

cola.push(20);
console.log("Se agregó:", 20);

cola.push(30);
console.log("Se agregó:", 30);
console.log("Cola actual:", cola);


let eliminado = cola.shift();
console.log("Se eliminó:", eliminado);


console.log("Cola final:", cola);

console.log("¿La cola está vacía?", cola.length === 0);