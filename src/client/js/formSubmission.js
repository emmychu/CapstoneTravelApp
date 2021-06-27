import { dateObject } from './dateConvert'
import { dateCheck } from './validDate'
import { uiUpdate } from './changeUI'

function submitForm(event) {
    event.preventDefault()
    let city = document.getElementById("first-destination").value
    let country = document.getElementById("country").value
    let state = document.getElementById("state").value
    let destination = [city,country,state]
    if(destination.length === 0 && country.length === 0){
        alert("Please input a destination placing the City,Country code without spaces! Thank you!")
    }else{
        let departObject = dateObject(document.getElementById("depart-date").value)
        let returnObject = dateObject(document.getElementById("return-date").value)
        let validDates = dateCheck(departObject,returnObject)
        if(validDates === true){
            Client.uiUpdate(destination, departObject, returnObject)
        }else{
            alert("Please input valid dates! Thank you!")
        }
    }
    
};

export { submitForm }