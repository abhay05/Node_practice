console.log('Client side javascript file is loaded!')

const form=document.querySelector('form')
const message1=document.querySelector('#message1')
const message2=document.querySelector("#message2")
const val=document.querySelector("input")

form.addEventListener('submit',(e)=>{
    e.preventDefault() // to prevent the refreshing of the page after the search button is pressed

    const city=val.value
    const url='/weather?address=' + city  // 'http://localhost:3000/weather?address=' + city for local
    message1.textContent="Loading..."
    message2.textContent=""
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            if(data.error){
                message1.textContent=data.error
            }else{
                message1.textContent=city
                message2.textContent=data.forcast
            }
        })
        
    })
})