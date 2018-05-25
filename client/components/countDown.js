export const countDown = (groupIndex, tourIndex, timer, buildEditTimerAction) => {
  let {seconds, minutes, hours, days} = timer;
  if (seconds > 0) {
    seconds--;
  }
  else if (minutes > 0) {
    minutes--;
    seconds = 59;
  }
  else if (hours > 0) {
    hours--;
    seconds = 59;
    minutes = 59;
  }
  else if (days > 0) {
    days--;
    hours = 24;
    seconds = 59;
    minutes = 59;
  }
  timer.hours = hours;
  timer.minutes = minutes;
  timer.seconds = seconds;
  timer.days = days;
  buildEditTimerAction(groupIndex, tourIndex, timer);
}
