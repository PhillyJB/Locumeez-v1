
//capture the array of earning values and iterate through it
var arrayOfDaysEarned = document.getElementsByClassName("x-day-temp");
var totalEarnings = 0;
for (eachDayWorked of arrayOfDaysEarned){
   let amountEarnedOnDay = Number(eachDayWorked.innerHTML);
   totalEarnings += amountEarnedOnDay;
}

//get the total earnings from iteration to insert in the HTML document to show user.
const totalEarnedForTheMonth = document.getElementById("month-total");
totalEarnedForTheMonth.innerHTML = totalEarnings;

//average earned on a per day basis displayed to user
const averageEarnedPerDayWorked = totalEarnings/arrayOfDaysEarned.length;
console.log(averageEarnedPerDayWorked);
const displayAverageEarnedPerDayWorked = document.getElementById("daily-average")
displayAverageEarnedPerDayWorked.innerHTML = averageEarnedPerDayWorked;

//gather information from the Form

const 
