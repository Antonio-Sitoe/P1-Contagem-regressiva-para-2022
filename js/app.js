const secondsContainer = document.querySelector('#seconds')
const minutsContainer = document.querySelector('#minuts')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoad= document.querySelector('#loading')
const countdowContainer= document.querySelector('#countdow')

const nextYear =  new Date().getFullYear() + 1
const newYearTime =  new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent=nextYear

const getTime = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({days, hours, minutes, seconds}) =>{
   secondsContainer.textContent = getTime(seconds)
   minutsContainer.textContent = getTime(minutes)
   hoursContainer.textContent = getTime(hours) 
   daysContainer.textContent = getTime(days)
}
const updateCountdown = () => {
  const currenTime = new Date()
  const difference = newYearTime - currenTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60

  insertCountdownValues({days, hours, minutes, seconds})
}
const handCountdownDisplay = () =>{
   spinnerLoad.remove()
   countdowContainer.style.display = 'flex'
}
setTimeout(handCountdownDisplay, 1000)
setInterval(updateCountdown, 1000)