let geo_url = "api.geonames.org/postalCodeSearch?placename="

function getCoordinates(destination){
    const url = geo_url + destination + "&username=moofiemonster"
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

export{
    getCoordinates
}