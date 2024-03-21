//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.enter').addEventListener('click',fetchData)
document.querySelector('.left').addEventListener('click',leftData)
document.querySelector('.right').addEventListener('click',rightData)
document.querySelector('.menu').addEventListener('click', menu)
document.querySelector('.exit').addEventListener('click', home)
let image = document.querySelector('#scene'),
 obj = document.querySelector('.menu'),
 btn = document.querySelectorAll('.nav'),
 instructions =document.querySelector('.instruct'),
 waiterQ=document.querySelector('h2'),
 drinkInput = document.querySelector('input'),
 browseDrink = document.querySelector('.enter'),
 details = document.querySelector('.subDetail'),
 carosel = document.querySelector('.drinkImg'),
 i=0;

function home(){
  instructions.innerHTML="Click Menu for our drinks!"
  image.src="bar.png"
  obj.classList.toggle("hidden")
  btn.forEach(e => e.classList.add("hidden"))
  waiterQ.classList.add("hidden")
  drinkInput.classList.add("hidden")
  browseDrink.classList.add("hidden")
  details.classList.add("hidden")
  carosel.classList.add("hidden")
  document.querySelector('.carosel').src=''
  document.querySelector('h3').innerHTML='name'
  document.querySelector('h4').innerHTML='Instruction'
 
}
function menu(){
  instructions.innerHTML="Press exit to return to the bar"
  image.src="drink menus.png"
  obj.classList.add("hidden")
  waiterQ.classList.toggle("hidden")
  drinkInput.classList.toggle("hidden")
  browseDrink.classList.toggle("hidden")
  details.classList.toggle("hidden")
  carosel.classList.toggle("hidden")
  btn.forEach(e => e.classList.toggle("hidden"))
  document.querySelector('input').value=''
}
function fetchData(){
  if(document.querySelector('input').value){
    x= document.querySelector('input').value.trim().split(' ').join('_')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      drinkObject=data
    console.log(data.drinks[0])
    console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`)
    document.querySelector('h3').innerHTML=data.drinks[0].strDrink
    document.querySelector('h4').innerHTML=data.drinks[0].strInstructions
    document.querySelector('.carosel').src=data.drinks[0].strDrinkThumb
  })
  .catch(err => {
      console.log(`error ${err}`)
  });}else{alert('Need a drink response first!')}

}

function leftData(){
  i=i-1
  if(document.querySelector('input').value){
  x= document.querySelector('input').value.trim().split(' ').join('_')
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    if (x.includes('_')|| i<0){
      alert('there is no drink on this side please go forward or enter another drink')
      i=i+1
    }
  console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`)
  document.querySelector('h3').innerHTML=data.drinks[i].strDrink
  document.querySelector('h4').innerHTML=data.drinks[i].strInstructions
  document.querySelector('.carosel').src=data.drinks[i].strDrinkThumb
})
.catch(err => {
  alert(`error ${err}`)
  i=i+1
});}else{
  i=i+1
  alert('Need a drink response first!')}
}
function rightData(){
  i=i+1
  if(document.querySelector('input').value){
  x= document.querySelector('input').value.trim().split(' ').join('_')
    
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(i)
    if (x.includes('_')){
      alert('your request for a unique drink but input a generic drink such as "gin not unique drinks like gin sour')
      i=i-1
    }
  console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`)
  document.querySelector('h3').innerHTML=data.drinks[i].strDrink
  document.querySelector('h4').innerHTML=data.drinks[i].strInstructions
  document.querySelector('.carosel').src=data.drinks[i].strDrinkThumb
})
.catch(err => {
  i=i-1
    console.log(`error ${err}`)
});}else{
  i=i-1
  alert('Need a drink response first!')}
  }
 