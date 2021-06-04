function submit(event){
    event.preventDefault()
    console.log("click!")
    let multiCity = false
    let destination = document.getElementById("first-destination").value
    if(destination.length === 0){
        alert("Please input a destination! Thank you!")
    }
    let departDate = new Date()
    let returnDate = new Date()
    departDate = document.getElementById("depart-date").value
    returnDate = document.getElementById("return-date").value
    let departMonth = parseInt(departDate.slice(5,7))
    let returnMonth = parseInt(returnDate.slice(5,7))
    // let duration = (returnDate.getTime() - departDate.getTime)/(1000 * 60 * 60 *24)
    if(document.getElementById("multicity").checked){
        multiCity = true;
    }
}