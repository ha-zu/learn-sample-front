// get html elements
let timer = document.getElementById("timer");
let ss_btn = document.getElementById("start-stop");
var start;
var timer_id;

ss_btn.addEventListener("click", function () {
  if (this.textContent === "Start") {
    start = new Date();
    timer_id = setInterval(getTimer, 10);
    this.textContent = "Stop";
    this.classList.remove("btn-primary");
    this.classList.add("btn-danger");
  } else {
    clearInterval(timer_id);
    this.textContent = "Start";
    this.classList.remove("btn-danger");
    this.classList.add("btn-primary");
  }
});

function getTimer() {
  let now = new Date();
  let millisec = now.getTime() - start.getTime();
  let seconds = Math.floor(millisec / 1000);
  let minutes = Math.floor(seconds / 60);
  let hour = Math.floor(minutes / 60);

  seconds = seconds - minutes * 60;
  minutes = minutes - hour * 60;
  timer.textContent =
    timeFormat(hour) + ":" + timeFormat(minutes) + ":" + timeFormat(seconds);
}

function timeFormat(time) {
  return String(time).padStart(2, "0");
}
