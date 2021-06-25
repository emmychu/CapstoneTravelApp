const base = "https://api.weatherbit.io/v2.0/forecast/daily?key="

function getImage(coordinates,apiKey) {
    const url = base + apiKey + "&" + coordinates
    let response = await fetch(url,{
        method: 'GET',
        headers:{'Content-Type':'application/json'}
    })
    try{
        let data = await response.json()
        console.log(data)
        return(data)
    }catch(error){
        console.log("error",error);
    }
    
}