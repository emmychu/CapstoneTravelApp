// Should change the body of the document to a calendar with the duration of the trip

function calendarCreate(position,year, month){
    let date = new Date(year,month-1)
    console.log(year)
    console.log(month)
    console.log(date)
    for(let i = 0; i < getDay(d)){
        
    }
}

function getDay(date){
    let day = date.getDay()
    if (day === 0){
        day = 7;
    } 
    return day -1;
}

export{
    calendarCreate,
    getDay
}



