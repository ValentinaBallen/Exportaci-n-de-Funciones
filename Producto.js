//LABORATORIO 5 - TIENDA EN LINEA
//DANNA LOPEZ 01-06-2026



class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }

    resumen() {
        return `
Producto: ${this.nombre}
Categoría: ${this.categoria}
Precio Base: $${this.precio}
`;
    }

    tarjeta() {
        return `
${this.nombre}
Categoría: ${this.categoria}
Precio final (IVA incluido): $${this.calcularTotal().toFixed(2)}
`;
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio;
    }

    tarjeta() {
        return `
${this.nombre}
Categoría: Digital
Licencia: ${this.licencia}
Precio: $${this.calcularTotal().toFixed(2)}
`;
    }
}

module.exports = {
    Producto,
    ProductoDigital
};