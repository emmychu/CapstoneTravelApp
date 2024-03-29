const fetch = require("node-fetch");
const username = "moofiemonster";
const base = "http://api.geonames.org/postalCodeSearchJSON?placename=";

//Retrieves the coordinates from Geonames
const getCoordinates = async(destination) => {
    const url = base + destination[0]+ `&country=`+ destination[1] + `&username=${username}&maxRows=10`
    let response = await fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    try{
        let data = await response.json()
        if(destination[2].length > 0){
            for(let n = 0; n < Object.keys(data['postalCodes']).length; n++){
                if(Object.values(data['postalCodes'][n]).includes(destination[2])){
                    return Object.values(data['postalCodes'][n])
                }
            }  
        }else{
            return data
        }
    }catch(error){
        console.log("error",error);
    }
}

module.exports = getCoordinates