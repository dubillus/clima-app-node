const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInformacion = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp.temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInformacion(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));