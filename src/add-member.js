const form= document.querySelector('form')
const nameInput= document.querySelector('#name')
const jobInput= document.querySelector('#job')
const submitBtn= document.querySelector('#submit-btn')
const alertBox = document.getElementById('alertBox');

form.addEventListener('submit',async (event)=>{
event.preventDefault();
submitBtn.innerHTML='<span class="loading loading-infinity loading-sm"></span>'
const data={
    name: nameInput.value,
    job: jobInput.value,
}
try{
    const res= await fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(
           data
        )
    })
    if(res.ok)
    {
        alertBox.textContent = 'Successful';
        alertBox.classList.remove('hidden');
        alertBox.classList.add('block');
        submitBtn.textContent = 'Save';
    }
    else {
        alertBox.textContent = 'Unsuccessful';
        alertBox.classList.remove('hidden');
        alertBox.classList.add('block');
    }
    
    setTimeout(() => {
       
        alertBox.classList.remove('block');
        alertBox.classList.add('hidden');
      }, 2000);
}
catch(error){
throw new Error(error)
}
})
