//Productos

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false
    }
}

const productos = [];
productos.push(new Producto ("Playstation", "499"));
productos.push(new Producto ("Xbox", "399"));
productos.push(new Producto ("Nintendo", "299"));




