class Cola{
    constructor() {
        this.items = [];
    }

    enqueue(elemento){
        this.items.push(elemento);
    }

    dequeue(){
        if (this.isEmpty()){
            return "La cola esta vacia";
        }
        return this.items.shift();
    }

    frente(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    mostrar(){
        console.log(this.items);
    }
}

//prueba de la cola
let miCola = new Cola();
miCola.enqueue("Cliente 1");
miCola.enqueue("Cliente 2");
miCola.enqueue("Cliente 3");
miCola.mostrar(); // ["Cliente 1", "Cliente 2", "Cliente3"]
console.log("Atendiendo:", miCola.dequeue()); //"Cliente 1"
console.log("Siguiente en la fila:", miCola.frente()); //"Cliente 2"



