//Turns date in string form and converts string to int and returns array [month , day, year]
function dateArray(date){
    let month = parseInt(date.slice(5,7))
    let day = parseInt(date.slice(8))
    let year = parseInt(date.slice(0,4))
    return [month, day, year]
}