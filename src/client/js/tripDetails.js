
function tripSummary(destination, departDate, returnDate){
    let totalDays = duration(departDate,returnDate)
    document.getElementById("destination").insertAdjacentHTML("afterend",
    `<div id="trip-info">
        <h2>Departing to <b>${destination}</b> on <b>${departDate.month}/${departDate.day}/${departDate.year}</b>!</h2>
        <p>Total trip is ${totalDays} days!</p>
        <h2>Returning on <b>${returnDate.month}/${returnDate.day}/${returnDate.year}</b>!</h2>
        <div id="countdown"></div>
        <p>Au revoir!!</p>
    </div>`)
    countDown(departDate)
}

function countDown(departDate){
    const countDate = new Date(`${departDate.month}/${departDate.day}/${departDate.year}`).getTime();
    setInterval(() => {
        const now = new Date().getTime()
        let difference = countDate - now
        const days = Math.floor(difference / (1000* 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60))/(1000))
        document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds until your trip!`
    },1000)
}

function duration(departDate, returnDate){
    const depart = new Date(`${departDate.month}/${departDate.day}/${departDate.year}`)
    const returnD = new Date(`${returnDate.month}/${returnDate.day}/${returnDate.year}`)
    const difference = Math.abs(returnD - depart);
    const convertDays = Math.ceil(difference / (1000 * 60 * 60 *24));
    return convertDays
}
export{
    tripSummary,
    countDown,
    duration
}