import { dateObject } from './dateConvert'

function submitForm(event) {
    event.preventDefault()
    console.log("click!")
    let multiCity = false
    let destination = document.getElementById("first-destination").value
    if(destination.length === 0){
        alert("Please input a destination! Thank you!")
    }
    else{
        departDate = document.getElementById("depart-date").value
        returnDate = document.getElementById("return-date").value
        let departObject = dateObject(departDate)
        let returnObject = dateObject(returnDate)
        if(returnObject.year >= departObject.year){
            if(returnObject.year > departObject.year){
                if(document.getElementById("multicity").checked){
                    multiCity = true;
                    uiUpdate(destination, multiCity, departObject, returnObject)
                }
                //return month and day all valid
            }else{ //return year = depart year
                if(returnObject.month < departObject.month){
                    alert("Please input valid dates! Thank you!")
                }else{
                    if(returnObject.month === departObject.month && returnObject.day >= departObject.day){
                        //CAN PROCEED
                        if(document.getElementById("multicity").checked){
                            multiCity = true;
                            uiUpdate(destination, multiCity, departObject, returnObject)
                        }
                    }else if(returnObject.month > departObject.month){
                        //CAN PROCEED
                        if(document.getElementById("multicity").checked){
                            multiCity = true;
                            uiUpdate(destination, multiCity, departObject, returnObject)
                        }
                    }
                }
            }
        }else{ //return year is less than depart year
            alert("Please input valid dates! Thank you!")
        }
    }
};

export { submitForm }