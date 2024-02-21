import { Propietario, TipoAnimal, Animal } from "../modules/clases.js";

let propietario, tipo, animal, motivo;

// Función para guardar los datos del input 
function agregarDatos() {
    propietario = new Propietario(
        document.getElementById("propietario").value,
        document.getElementById("direccion").value,
        document.getElementById("telefono").value
    );
    tipo = new TipoAnimal(document.getElementById("tipo").value);
    animal = new Animal(
        document.getElementById("tipo").value,
        document.getElementById("nombreMascota").value
    );
    motivo = document.getElementById("enfermedad").value;
}

// Función para mostrar los datos en una lista, dentro del div con la clase datos-agregados
function mostrarDatos() {
    let resultado = document.getElementById("resultado");
    let datosAgregados = document.querySelector(".datos-agregados");
    resultado.innerHTML = `
        <ul>
            <li>Propietario: ${propietario.getNombre()}</li>
            <li>Dirección: ${propietario.getDireccion()}</li>
            <li>Teléfono: ${propietario.getTelefono()}</li>
            <li>Tipo: ${tipo.getTipo()}</li>
            <li>Nombre: ${animal.getNombre()}</li>
            <li>Enfermedad: ${motivo}</li>
        </ul>
    `;
    datosAgregados.style.display = "block";
}

// Evento listener para el formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Esto evitará que el formulario se envíe automáticamente

    agregarDatos();
    mostrarDatos();
});