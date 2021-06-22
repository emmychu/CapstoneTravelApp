
function dateCheck(departDate, returnDate) {
    if(returnDate.year >= departDate.year){
        if(returnDate.year > departDate.year){
            return true
            //return month and day all valid
        }else{ //return year = depart year
            if(returnObject.month < departObject.month){
                return false
            }else{
                if((returnObject.month === departObject.month && returnObject.day >= departObject.day) || returnObject.month > departObject.month){
                    return true
                }
            }
        }
    }
}

export {
    dateCheck
}