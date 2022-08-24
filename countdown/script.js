const countdownDay = new Date("Aug 30,2022 00:00:00").getTime();
const items = document.querySelectorAll(".deadline .count");
const page=document.querySelector('.deadlineInfo')


var countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDay - now;
  
  if(distance<0){
    clearInterval(countdown)
    page.innerHTML=`<h1>Sorry,this giveaway expired!</h1>`
}
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);
  const value = [days, hours, mins, sec];
  function format(items) {
    if (items < 10) {
      return `0${items}`;
    }
    return items;
  }

  items.forEach(function (elements, index) {
    elements.innerHTML = format(value[index]);
  });

}, 1000);

