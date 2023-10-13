const featuredContainer = document.querySelector('#featured-container');
const pickContainer= document.querySelector('#pick-container')
const badgeContainer=document.querySelector('#badge-container')
let coffees= []
let ingredients=[
  'Coffee',
  'Espresso',
  'Foam',
  'Hot Water',
  '1oz Espresso',
  '2oz Espresso',
  '1oz Steamed Milk',
  'Foamed milk',
  'Long pulled espresso'

];
badgeContainer.addEventListener('click',(event)=>{
  const clickedBtn= event.target.closest('.custom-badge');
 const selectedIngredients=clickedBtn.textContent
 const filteredCoffees= coffees.filter(item=>item.ingredients.includes(selectedIngredients))
  loadCoffeeToUI(filteredCoffees)
})
window.addEventListener('DOMContentLoaded',()=>{
    featuredContainer.innerHTML=`<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>`
    getCoffee();
})



async function getCoffee(){
 const res= await fetch('https://api.sampleapis.com/coffee/hot')  
const data= await res.json()
coffees= data
loadCoffeeToUI(coffees)
ingredients.forEach((item)=>{
  const buttonEl=document.createElement('button');
  buttonEl.classList.add('custom-badge')
  buttonEl.textContent=item;
  badgeContainer.appendChild(buttonEl)
})

}
function loadCoffeeToUI(coffeetoLoad){
  featuredContainer.innerHTML=''
coffeetoLoad.forEach(item=>{
    addCardTocardContainer(item)
})
}



function addCardTocardContainer(coffee){
    

    const articleEl= document.createElement('article')
    articleEl.classList.add('featured-card');
    articleEl.innerHTML=`
    <article class="featured-card ">
    <figure class="h-56">
    <img src=${coffee.image}
    alt="title"
    loading="lazy"
    /></figure>
    <div class="card-body">
      <h2 class="card-title">
       ${coffee.title}
        <div class="badge badge-secondary">Hot</div>
      </h2>
      <p>
      ${coffee.description} 
      </p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">${coffee.ingredients[0]}</div> 
    
      </div>
    </div>
    </article>
    `;
    featuredContainer.appendChild(articleEl)
}

