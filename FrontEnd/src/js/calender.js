
// document.addEventListener("DOMContentLoaded", () => {
    const url = "https://adam-backend.onrender.com";

    function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
            years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
    }
    
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectYear = document.getElementById("year");
    selectMonth = document.getElementById("month");
    
    createYear = generate_year_range( 1970, currentYear );
    
    document.getElementById("year").innerHTML = createYear;
    
    var calendar = document.getElementById("calendar");
    var lang = calendar.getAttribute('data-lang');
    
    var months = "";
    var days = "";
    
    var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    months = monthDefault;
    days = dayDefault;

    var $dataHead = "<tr>";
    for (dhead in days) {
        $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    $dataHead += "</tr>";
    
    document.getElementById("thead-month").innerHTML = $dataHead;
    
    
    monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);
    
    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }
    
    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }
    
    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }
    
    function showCalendar(month, year) {
        var firstDay = ( new Date( year, month ) ).getDay();
        tbl = document.getElementById("calendar-body");
        tbl.innerHTML = "";
        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;
    
        // creating all cells
        var date = 1;
        for ( var i = 0; i < 6; i++ ) {
            var row = document.createElement("tr");
            for ( var j = 0; j < 7; j++ ) {
                if ( i === 0 && j < firstDay ) {
                    cell = document.createElement( "td" );
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    cell = document.createElement("td");
                    cell.setAttribute("data-date", date);
                    cell.setAttribute("data-month", month + 1);
                    cell.setAttribute("data-year", year);
                    cell.setAttribute("data-month_name", months[month]);
                    cell.className = "date-picker";
                    cell.innerHTML = "<span>" + date + "</span>";
    
                    if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                        cell.className = "date-picker selected";
                    }
                    row.appendChild(cell);
                    date++;
                }
    
    
            }
    
            tbl.appendChild(row);
        }
    
    }
    
    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }
// });


document.getElementById("callycal").addEventListener("click", async (e) => {
    e.preventDefault();
    const accountId = window.location.href.split("=")[1];
    const options = {
        method: "GET",
        headers: {
        Authorization: window.localStorage.getItem("session"),
      },
};

    try {
        const calenderResponse = await fetch(`${url}/users/habits/${accountId}`,options);
        const calenderData = await calenderResponse.json();
        console.log(calenderData);
        var date = new Date(this.valueOf());
        for (let i = 0; i < calenderData.length; i++) {
            //if date clicked, return todays habits
            //otherwise return no habits

            console.log(calenderData[i].date == date.getDate());
            if(calenderData[i].date){
                //append card with habit
                console.log("adding a card")
            }
            else{
                //remove cards and display new habits
            }
          }
      } catch (err) {
        console.log(err);
      }

});

