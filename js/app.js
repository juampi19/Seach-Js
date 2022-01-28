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

    agregarOption();
} );

//Eventos para los select
marca.addEventListener( 'change', e => {
    datosAutos.marca = e.target.value;
    
    filtrarAutos();
} );

year.addEventListener( 'change', e => {
    datosAutos.year = e.target.value;

    filtrarAutos();
} );

minimo.addEventListener( 'change', e => {
    datosAutos.minimo = e.target.value;

    filtrarAutos();
} );

minimo.addEventListener( 'change', e => {
    datosAutos.minimo = e.target.value;

    filtrarAutos();
} );
maximo.addEventListener( 'change', e => {
    datosAutos.maximo = e.target.value;

    filtrarAutos();
} );

puertas.addEventListener( 'change', e => {
    datosAutos.puertas = e.target.value;

    filtrarAutos();
} );

transmision.addEventListener( 'change', e => {
    datosAutos.transmision = e.target.value;

    filtrarAutos();
} );

color.addEventListener( 'change', e => {
    datosAutos.color = e.target.value;

    filtrarAutos();
} );

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


//Añadiendo los años al select
function agregarOption() {
    for( let i = maxYear; i >= minYear; i-- ){
        const option = document.createElement( 'option' );
        option.value = i;
        option.textContent = i;
        year.append( option );
    }
};

//Funcion para filtrar los autos
function filtrarAutos() {

    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    if( resultados.length ) {
        mostrarAutos( resultados );
    } else {
        LimpiarHTML();
    }

};


//Filtrados
function filtrarMarca( auto ) {
    const { marca } = datosAutos;
    if( marca ) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear( auto ) {
    const { year } = datosAutos;
    if( year ) {
        return auto.year === parseInt( year );
    }

    return auto;
}

function filtrarMinimo( auto ) {
    const { minimo } = datosAutos;
    if( minimo ) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo( auto ) {
    const { maximo } = datosAutos;
    if( maximo ) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas( auto ) {
    const { puertas } = datosAutos;
    if( puertas ) {
        return auto.puertas === parseInt( puertas );
    }

    return auto;
}

function filtrarTransmision( auto ) {
    const { transmision } = datosAutos;
    if( transmision ) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor( auto ) {
    const { color } = datosAutos;
    if( color ) {
        return auto.color === color;
    }

    return auto;
}
