function colorTrip(departDate,returnDate){
    let returnMonth = returnDate.month
    let returnDay = returnDate.day
    let returnYear = returnDate.year
    let departMonth = departDate.month
    let departDay = departDate.day
    let departYear = departDate.year
    let departElement = document.getElementById(`${departMonth}-${departDay}-${departYear}`)
    let returnElement = document.getElementById(`${returnMonth}-${returnDay}-${returnYear}`)
    departElement.style.backgroundColor = "palegreen"
    departElement.style.boxShadow = "5px 5px 5px grey"
    returnElement.style.backgroundColor = "palevioletred"
    returnElement.style.boxShadow = "5px 5px 5px grey"
}

export{
    colorTrip
}