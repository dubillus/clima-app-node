const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0cec6dd2e792b2734a1365b1e27a4e97`);

    if (resp.length == 0) {
        throw new Error('No hay datos para mostrar');
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}