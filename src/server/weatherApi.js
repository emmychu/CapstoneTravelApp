const fetch = require("node-fetch");

const base = "https://api.weatherbit.io/v2.0/forecast/daily?key="

const getWeather = async(apiKey,coordinates) => {
    const url = base + apiKey + "&lat=" + coordinates[0] + '&lon=' + coordinates[1]
    let response = await fetch(url,{
        method: 'GET',
        headers:{'Content-Type':'application/json'}
    })
    try{
        let data = await response.json()
        console.log([data['data'][0]['datetime'], date['data'][0]['weather']['description']])
        return(data)
    }catch(error){
        console.log("error",error);
    }
    
}

module.exports = getWeather