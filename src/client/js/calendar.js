// Should change the body of the document to a calendar with the duration of the trip

function calendarCreate(year, month){
    let mon = month -1
    let date = new Date(year,mon)
    let table = `<table id = "${month}-${year}"><th id = "day-header">SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr><tr>`

    for(let i = 0; i < date.getDay(); i++){
        table += '<td></td>'
    }

    while(date.getMonth() == mon){
        table += `<td id="${month}-${date.getDate()}">` + date.getDate() + '</td>'
        if(date.getDay()% 7 === 6){
            table += '</tr><tr>'
        }
        date.setDate(date.getDate()+1);
    }

    if(date.getDay()!=0){
        for(let i = date.getDay(); i < 7; i++){
            table += '<td></td>'
        }
    }
    table += '</tr></table>'

    return table;
}

export{
    calendarCreate
}



