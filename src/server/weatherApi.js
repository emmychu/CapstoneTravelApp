const fetch = require("node-fetch");
const apiKey = "da6552e214114d288d0d19870277f3a7";
const base = "https://api.weatherbit.io/v2.0/forecast/daily?key=";

//Uses coordinates to retrieve weather forecast
const getWeather = async(coordinates) => {
    const url = base + apiKey + "&lat=" + coordinates[0] + '&lon=' + coordinates[1]
    let response = await fetch(url,{
        method: 'GET',
        headers:{'Content-Type':'application/json'}
    });
    try{
        let data = await response.json();
        return(data)
    }catch(error){
        console.log("error",error);
    }
    
}

module.exports = getWeather