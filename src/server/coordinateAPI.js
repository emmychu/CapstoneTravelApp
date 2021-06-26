const fetch = require("node-fetch");

const base = "http://api.geonames.org/postalCodeSearchJSON?placename="

const getCoordinates = async(destination,username) => {
    console.log(destination)
    const url = base + destination[0]+ `&country=`+ destination[1] + "&username=moofiemonster&maxRows=10"
    let response = await fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    try{
        let data = await response.json()
        console.log(data)
        for(let n = 0; n < Object.keys(data['postalCodes']).length; n++){
            if(Object.values(data['postalCodes'][n]).includes(destination[2])){
                return Object.values(data['postalCodes'][n])
            }
        }  
    }catch(error){
        console.log("error",error);
    }
}

module.exports = getCoordinates