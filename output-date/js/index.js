let date_el = document.getElementById("date");
let datetime = new Date();
const [year, month, date] = [
  datetime.getFullYear(),
  datetime.getMonth(),
  datetime.getDate(),
];
let today = year + "/" + (month + 1) + "/" + date;
date_el.textContent = today;
