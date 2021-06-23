
function dateCheck(departDate, returnDate) {
    if(returnDate.year >= departDate.year){
        if(returnDate.year > departDate.year){
            return true
        }else{
            if(returnDate.month < departDate.month){
                return false
            }else{
                if((returnDate.month === departDate.month && returnDate.day >= departDate.day) || returnDate.month > departDate.month){
                    return true
                }
            }
        }
    }else{
        console.log("fail")
        return false
    }
}

export {
    dateCheck
}