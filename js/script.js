const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 9)
const monthTarget = targetDate.toLocaleString('en-us', {month: 'short'})


const countDownDate = new Date(`${monthTarget} ${targetDate.getDate()}, ${targetDate.getFullYear()} 00:00:00`).getTime()


// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
  
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    const days = `${Math.floor(distance / (1000 * 60 * 60 * 24)).toString().length < 2 ? '0' + Math.floor(distance / (1000 * 60 * 60 * 24)) : Math.floor(distance / (1000 * 60 * 60 * 24))}`;
    const hours = `${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().length < 2 ? '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`;
    const minutes = `${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().length < 2 ? '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`;
    const seconds = `${Math.floor((distance % (1000 * 60)) / 1000).toString().length < 2 ? '0' + Math.floor((distance % (1000 * 60)) / 1000) : Math.floor((distance % (1000 * 60)) / 1000)}`;
  
    // Display the result in the element with id="demo"
    day.innerHTML = days
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);