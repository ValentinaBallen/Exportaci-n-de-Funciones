//LABORATORIO 5 - TIENDA EN LINEA
//DANNA LOPEZ 01-06-2026



class Usuario {
    constructor(nombre, correo, rol = "cliente") {
        this.nombre = nombre;
        this.email = correo;
        this.rol = rol;
        this.activo = true;
    }

    saludo() {
        return `Hola, soy ${this.nombre} y mi rol es ${this.rol}.`;
    }

    desactivar() {
        this.activo = false;
        return `La cuenta de ${this.nombre} ha sido desactivada.`;
    }

    resumen() {
        return `
Nombre: ${this.nombre}
Email: ${this.correo}
Rol: ${this.rol}
Estado: ${this.activo ? "Activa" : "Inactiva"}
`;
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, correo, membresia) {
        super(nombre, correo, "cliente VIP");
        this.membresia = membresia;
    }

    saludo() {
        return `${super.saludo()} Membresía: ${this.membresia}.`;
    }

    beneficios() {
        return `El cliente VIP ${this.membresia} tiene acceso a descuentos exclusivos y atención prioritaria.`;
    }
}

module.exports = {
    Usuario,
    UsuarioVIP
};