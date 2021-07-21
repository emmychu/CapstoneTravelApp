const fetch = require("node-fetch");

const base = "https://pixabay.com/api/?key="
//Searches for images based on user inputted desination
const getImage = async(apiKey,destination) => {
    console.log("Start")
    console.log(destination)
    let preSearch = destination[0].split(" ")
    let searchTerm = ""
    console.log("i'm here")
    if(preSearch.length > 1){
        for(let n = 0; n < preSearch.length; n++){
            searchTerm += `+${preSearch[n]}`
        }
    }else{
        searchTerm = preSearch[0]
    
    }
    const url = base + apiKey + "&q=" + searchTerm +"&image_type=photo&category=places"
    let response = await fetch(url,{
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

module.exports = getImage