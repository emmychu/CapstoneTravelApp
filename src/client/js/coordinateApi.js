let geo_url = "api.geonames.org/postalCodeSearch?placename="

function getCoordinates(destination){
    const url = geo_url + destination + "&username=moofiemonster"
    let respoinse = await fetch(url,{
        method: 'GET',
        headers:{'Content-Type':'application/json'}
    })
    try{
        let data = await response.json()
        return(data)
    }catch(error){
        console.log("error",error);
    }
}