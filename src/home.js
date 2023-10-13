const featuredContainer = document.querySelector('#featured-container');
const pickContainer= document.querySelector('#pick-container')
let coffees= []

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
featuredContainer.innerHTML=''
coffees.slice(0,3).forEach(item=>{
    addCardTocardContainer(item)
})
coffees.slice(3,9).forEach(item=>{
    addCardToPickContainer(item)
})


}



function addCardTocardContainer(coffee){
    

    const articleEl= document.createElement('article')
    articleEl.classList.add('featured-card');
    articleEl.innerHTML=`
    <article class="featured-card ">
    <figure class="max-h-56">
    <img src=${coffee.image}
    alt="Shoes" /></figure>
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


function addCardToPickContainer(cf){
    const articleEls= document.createElement('article')
    articleEls.classList.add('pick-card');
    articleEls.innerHTML=`
    <article class="card w-80 bg-base-100 shadow-xl image-full">
    <figure><img class="max-h-56"
     src=${cf.image}
    alt="Coffee" /></figure>
    <div class="card-body">
      <h2 class="card-title"> ${cf.title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-secondary">Buy Now</button>
      </div>
    </div>
  </article>`
  pickContainer.appendChild(articleEls)
}