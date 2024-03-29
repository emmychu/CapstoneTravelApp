const fetch = require("node-fetch");
const apiKey = "22238697-c284ba5b1bd2156064c8f808e";
const base = "https://pixabay.com/api/?key="
//Searches for images based on user inputted desination
const getImage = async(destination) => {
    let preSearch = destination[0].split(" ")
    let searchTerm = ""
    if(preSearch.length > 1){
        for(let n = 0; n < preSearch.length; n++){
            searchTerm += `+${preSearch[n]}`
        }
    }else{
        searchTerm = preSearch[0]
    
    }
    let url = base + apiKey + "&q=" + searchTerm +"&image_type=photo&category=places"
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