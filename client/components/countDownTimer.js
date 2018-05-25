export const timer = (groupIndex, tourIndex, timer, buildEditTimer) => {
  
  const x = setInterval(() => {
    //console.log('adw');

    // If the count down is finished, write some text 
    // if (distance < 0) {
    //   console.log('expired');
    //   clearInterval(x);
    //   //document.getElementById("demo").innerHTML = "EXPIRED";
    // }
    buildEditTimer(groupIndex, tourIndex, timer);
  }, 1000);
}
