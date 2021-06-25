
function dateCheck(departDate, returnDate) {
    //need to make valid check for days before current day
    const now = new Date().getTime()
    const depart = new Date(`${departDate.month}/${departDate.day}/${departDate.year}`).getTime()
    const difference = depart - now
    if(difference < 0){
        return false
    }else if(returnDate.year >= departDate.year){
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