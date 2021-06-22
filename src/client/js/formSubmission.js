import { dateObject } from './dateConvert'
import { dateCheck } from './validDate'

function submitForm(event) {
    event.preventDefault()
    console.log("click!")
    let destination = document.getElementById("first-destination").value
    if(destination.length === 0){
        alert("Please input a destination! Thank you!")
    }
    else{
        departDate = document.getElementById("depart-date").value
        returnDate = document.getElementById("return-date").value
        let departObject = dateObject(departDate)
        let returnObject = dateObject(returnDate)
        let validDates = dateCheck(departDate,returnDate)
        if(validDates === true){
            uiUpdate(destination, departObject, returnObject)
        }else{
            alert("Please input valid dates! Thank you!")
        }
    }
};

export { submitForm }