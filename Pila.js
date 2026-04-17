
let pila = [];


pila.push({ nombre: "Orlando", edad: 30 });
console.log("Se agregó:", pila[pila.length - 1]);

pila.push({ nombre: "Ana", edad: 25 });
console.log("Se agregó:", pila[pila.length - 1]);

console.log("Pila actual:", pila);


let eliminado = pila.pop();
console.log("Se eliminó:", eliminado);


console.log("Pila final:", pila);

console.log("¿La pila está vacía?", pila.length === 0);