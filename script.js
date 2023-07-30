
function updateClock(){
    let currentTime = new Date();
    let hr = currentTime.getHours();
    let mi = currentTime.getMinutes();
    let se = currentTime.getSeconds();
    let month = currentTime.getUTCMonth();
    let date = currentTime.getDate();
    let year = currentTime.getFullYear();
    
    hr = (hr < 10) ? "0" + hr : hr;
    mi = (mi < 10) ? "0" + mi : mi;
    se = (se < 10) ? "0" + se : se;
    let timeString = `${hr}:${mi}:${se}`;

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    let monthName = monthNames[month];
    let dateString = `${monthName} ${date}, ${year}`;
    document.getElementById('digital').innerText = `${timeString}`;
    document.getElementById('currentDate').innerText = `${dateString}`;   
    
}
setInterval(updateClock,1000);
updateClock();


