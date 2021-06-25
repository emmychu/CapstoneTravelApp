import { dateObject } from './dateConvert'
import { dateCheck } from './validDate'
import { uiUpdate } from './changeUI'

function submitForm(event) {
    event.preventDefault()
    let destination = document.getElementById("first-destination").value
    if(destination.length === 0){
        alert("Please input a destination! Thank you!")
    }else{
        let departObject = dateObject(document.getElementById("depart-date").value)
        let returnObject = dateObject(document.getElementById("return-date").value)
        let validDates = dateCheck(departObject,returnObject)
        if(validDates === true){
            uiUpdate(destination, departObject, returnObject)
        }else{
            alert("Please input valid dates! Thank you!")
        }
    }
    
};

export { submitForm }