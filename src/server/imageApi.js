const fetch = require("node-fetch");

const base = "https://pixabay.com/api/?key="
const getImage = async(apiKey,destination) => {
    let preSearch = destination[0].split(" ")
    let searchTerm = ""
    if(preSearch.length > 1){
        for(let n = 0; n < preSearch.length; n++){
            searchTerm += `+${preSearch[n]}`
        }
        console.log(searchTerm)
    }else{
        searchTerm = preSearch[0]
    
    }
    const url = base + apiKey + "&q=" + searchTerm +"&image_type=photo"
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