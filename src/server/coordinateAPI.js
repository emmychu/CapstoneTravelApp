const fetch = require("node-fetch");

const base = "http://api.geonames.org/postalCodeSearchJSON?placename="

const getCoordinates = async(destination) => {
    const url = base + destination[0]+ `&country=`+ destination[1] + "&username=moofiemonster&maxRows=10"
    let response = await fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    try{
        let data = await response.json()
        console.log(destination)
        if(destination[2].length > 0){
            for(let n = 0; n < Object.keys(data['postalCodes']).length; n++){
                if(Object.values(data['postalCodes'][n]).includes(destination[2])){
                    console.log(Object.values(data['postalCodes'][n]))
                    return Object.values(data['postalCodes'][n])
                }
            }  
        }else{
            console.log(Object.values(data['postalCodes']))
            return data['postalCodes'][0]
        }
    }catch(error){
        console.log("error",error);
    }
}

module.exports = getCoordinates