class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    
    // getter para obtener datos
    getNombre() {
        return this.nombre;
    }
    getDireccion() {
        return this.direccion;
    }
    getTelefono() {
        return this.telefono;
    }
}

class TipoAnimal {
    constructor(tipo) {
        this.tipo = tipo;
    }
    
    // getter 
    getTipo() {
        return this.tipo;
    }
}

class Animal extends TipoAnimal {
    constructor(tipo, nombre) {
        super(tipo);
        this.nombre = nombre;
    }
    
    // getter  y setter
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    
}

export { Propietario, TipoAnimal, Animal };

