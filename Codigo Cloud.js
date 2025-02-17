class Cola {
    constructor(limite = 10) {
        this.items = [];
        this.limite = limite; // Añadimos el límite de la cola
    }

    // Insertar elemento
    enqueue(elemento) {
        if (this.isFull()) {
            return "La cola está llena. No se pueden agregar más elementos.";
        }
        this.items.push(elemento);
        return "Elemento agregado exitosamente";
    }

    // Quitar elemento
    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    // Verificar si está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Verificar si está llena
    isFull() {
        return this.items.length >= this.limite;
    }

    // Obtener el elemento del frente
    frente() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    // Obtener tamaño de la cola
    tamaño() {
        return this.items.length;
    }

    // Mostrar elementos
    mostrar() {
        console.log(this.items);
    }
}

// Pruebas de la cola
let miCola = new Cola(10); // Creamos una cola con límite de 10

// Probamos todas las funcionalidades
console.log("--- Pruebas de la Cola ---");

// Insertamos elementos
miCola.enqueue("Elemento 1");
miCola.enqueue("Elemento 2");
miCola.enqueue("Elemento 3");

console.log("\nMostrando cola inicial:");
miCola.mostrar();

console.log("\nProbando funcionalidades:");
console.log("Tamaño actual:", miCola.tamaño());
console.log("¿Está vacía?:", miCola.isEmpty());
console.log("¿Está llena?:", miCola.isFull());
console.log("Elemento al frente:", miCola.frente());

console.log("\nQuitando un elemento:");
console.log("Elemento removido:", miCola.dequeue());
miCola.mostrar();
