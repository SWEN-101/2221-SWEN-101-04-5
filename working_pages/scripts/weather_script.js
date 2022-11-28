function getDate(){
    var return_date = document.getElementById("date"); // Set return date variable.
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //Today!
    const today = new Date();
    const yyyy = today.getFullYear();
                
    let month = months[today.getMonth()]; 
    let day = today.getDate();
    let weekday = days[today.getDay()];

    const formattedToday = weekday + ", " + month + ' ' + day + ', ' + yyyy;

    return_date.innerHTML = formattedToday;
}