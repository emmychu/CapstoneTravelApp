
function dateCheck(departDate, returnDate) {
    //need to make valid check for days before current day
    
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
        return false
    }
}

export {
    dateCheck
}