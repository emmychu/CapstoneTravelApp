
const base = "https://pixabay.com/api/?key="
function getImage(apiKey,destination) {
    let preSearch = destination.split(" ")
    let searchTerm = ""
    if(preSearch.length > 1){
        for(let n = 0; n < preSearch.length; n++){
            searchTerm += `+${preSearch[n]}`
        }
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
        console.log(data)
        return(data)
    }catch(error){
        console.log("error",error);
    }
}