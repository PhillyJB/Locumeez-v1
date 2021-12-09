
function grabTarget(ev) {

   let targetAmount = Number(document.getElementById("month-target").value);
   return targetAmount;
}


let sumOfDaysEarnings = 0;
//gather information from the Form
function calcEarnings(ev) {
   //prevent submit button event clearing the form
   ev.preventDefault();
   let formData = document.getElementsByClassName('x-day');
   for(i of formData){
      sumOfDaysEarnings += Number(i.value);
   }
   //total earned for the month
   const totalEarnedForTheMonth = document.getElementById("month-total");
   totalEarnedForTheMonth.innerHTML = sumOfDaysEarnings

   //average earned on a per day basis displayed to user
   const averageEarnedPerDayWorked = sumOfDaysEarnings/formData.length;
   const displayAverageEarnedPerDayWorked = document.getElementById("daily-average")
   displayAverageEarnedPerDayWorked.innerHTML = averageEarnedPerDayWorked;

   //amount left to make to reach month target
   const targetAmountForMonth = document.getElementById("left-to-target");
   targetAmountForMonth.innerHTML = grabTarget() - sumOfDaysEarnings;
}

document.addEventListener('DOMContentLoaded', function(){

   document.getElementById('btn').addEventListener('click', calcEarnings);
   document.getElementById("target-btn").addEventListener('click', grabTarget);

});