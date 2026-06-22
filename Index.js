//LABORATORIO 5 - TIENDA EN LINEA
//DANNA LOPEZ 01-06-2026


const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");
const { calcularTotalCarrito } = require("./utilidades");

// Usuarios
const cliente = new Usuario(
    "Carlos Pérez",
    "carlos@email.com"
);

const administrador = new Usuario(
    "Laura Gómez",
    "laura@email.com",
    "administrador"
);

const vip = new UsuarioVIP(
    "Andrés Torres",
    "andres@email.com",
    "Gold"
);

// Productos físicos
const laptop = new Producto(
    "Laptop Lenovo",
    3000000,
    "Tecnología"
);

const silla = new Producto(
    "Silla Gamer",
    800000,
    "Muebles"
);

// Productos digitales
const curso = new ProductoDigital(
    "Curso JavaScript",
    150000,
    "de por vida"
);

const software = new ProductoDigital(
    "Software CRM",
    500000,
    "anual"
);

// Desactivar un usuario
console.log(cliente.desactivar());

// Aplicar descuento
const precioConDescuento = laptop.aplicarDescuento(20);

console.log("\n=== DESCUENTO ===");
console.log(
    `Laptop con 20% de descuento: $${precioConDescuento.toFixed(2)}`
);
console.log(
    `Precio original de la laptop: $${laptop.precio}`
);

// Tarjetas de productos
console.log("\n=== PRODUCTOS ===");

const productos = [laptop, silla, curso, software];

productos.forEach(producto => {
    console.log(producto.tarjeta());
});

// Resumen de usuarios
console.log("\n=== USUARIOS ===");

const usuarios = [cliente, administrador, vip];

usuarios.forEach(usuario => {
    console.log(usuario.resumen());
});

// Beneficios VIP
console.log(vip.beneficios());

// Total carrito (reto adicional)
const carrito = [laptop, curso, software];

console.log("\n=== CARRITO ===");
console.log(
    `Total carrito: $${calcularTotalCarrito(carrito).toFixed(2)}`
);