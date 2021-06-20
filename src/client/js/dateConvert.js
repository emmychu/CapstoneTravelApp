//Turns date in string form and converts string to int and returns array [month , day, year]
function dateObject(date){
    let dateInfo = {
        'month': parseInt(date.slice(5,7)),
        'day': parseInt(date.slice(8)),
        'year': parseInt(date.slice(0,4))
    }
    return dateInfo
}