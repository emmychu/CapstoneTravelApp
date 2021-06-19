import { dateArray } from './dateArray'

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
        let departArray = dateArray(departDate)
        let returnArray = dateArray(returnDate)
        let departMonth = departArray[0]
        let departDay = departArray[1]
        let departYear = departArray[2]
        let returnMonth = returnArray[0]
        let returnDay = returnArray[1]
        let returnYear = returnArray[2]
        if(returnYear >= departYear){
            if(returnYear > departYear){
                //return month and day all valid
            }else{ //return year = depart year
                if(returnMonth < departMonth){
                    alert("Please input valid dates! Thank you!")
                }else{
                    if(returnMonth === departMonth && returnDay >= departDay){
                        //CAN PROCEED
                    }else if(returnMonth > departMonth){
                        //CAN PROCEED
                    }
                }
            }
        }else{ //return year is less than depart year
            alert("Please input valid dates! Thank you!")
        }
        // let duration = (returnDate.getTime() - departDate.getTime)/(1000 * 60 * 60 *24)
        if(document.getElementById("multicity").checked){
            multiCity = true;
        }
    }

};

export { submitForm }