//Referencias
const marca = document.querySelector( '#marca' ); 
const year = document.querySelector( '#year' );
const minimo = document.querySelector( '#minimo' );
const maximo = document.querySelector( '#maximo' );
const puertas = document.querySelector( '#puertas' );
const transmision = document.querySelector( '#transmision' );
const color = document.querySelector( '#color' );

//Contenedor de los resultados 
const resultado = document.querySelector( '#resultado' );

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//Generar un objeto con los datos de la base de datos
const datosAutos = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//Eventos
document.addEventListener( 'DOMContentLoaded', () => {
    mostrarAutos( autos );
} )


//Funciones
//Agregar autos al html
function mostrarAutos( datos ) {
    
    LimpiarHTML();
    datos.forEach( auto => {
        const { marca, modelo, year, precio, puertas, transmision, color } = auto;
        const parrafo = document.createElement( 'p' );
        parrafo.textContent = `
            ${marca} -
            ${modelo} -
            Año: ${year} -
            Precio: $${precio} -
            Puertas: ${puertas} -
            Transmision: ${transmision} -
            Color: ${color}
        `;

        resultado.appendChild( parrafo );
    });
}


//Limpiar el html
function LimpiarHTML() {
    while( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}