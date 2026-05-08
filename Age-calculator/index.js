const dobinput = document.getElementById("dob");
const Today = new Date();

Today.setDate(Today.getDate() - 1)
dobinput.value = Today.toISOString().split('T')[0];


function CalculateAge() {
    const SelectedDate = dobinput.value ? new Date(dobinput.value) : Today
    const CurrentDate = new Date();
    let Month = CurrentDate.getMonth() - SelectedDate.getMonth();
    let Days = CurrentDate.getDay() - SelectedDate.getDay();
    let Year = CurrentDate.getFullYear() - SelectedDate.getFullYear();
    // console.log("Days", Days);
    // console.log("Months", Month)
    // console.log("Year", Year)
    if (Days < 0) {
        const previousMonthDays = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth(), 0).getDate();
        Days += previousMonthDays;
        // console.log("perv", previousMonthDays)

    }
    if (Month < 0) {
        Year--;
        Month += 12;
    }
    document.getElementById('years').innerHTML = Year;
    document.getElementById('months').innerHTML = Month;
    document.getElementById("days").innerHTML = Days
}
CalculateAge();

