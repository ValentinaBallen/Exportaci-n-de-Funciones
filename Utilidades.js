//LABORATORIO 5 - TIENDA EN LINEA
//DANNA LOPEZ 01-06-2026


function calcularTotalCarrito(productos) {
    return productos.reduce(
        (total, producto) => total + producto.calcularTotal(),
        0
    );
}

module.exports = {
    calcularTotalCarrito
};