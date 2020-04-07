const request = require('request')

const forcast=(longi,lati,callback)=>{
const url='https://api.darksky.net/forecast/d26284ed5c6d06ebc13ebb953bbf9fd0/'+lati.toString()+','+longi.toString()+'?lang=en&units=si'
console.log(url)
request({url,json:true},(error,{body})=>{

    if(error){
        console.log(error)
    }else if(body.error){
    console.log("No location found")
    }else{
    //const data = JSON.parse()
    callback(undefined,body.currently.summary)
    //console.log(console.body.currently)
    //console.log(response.body.daily.data[0].summary)
    }
    
    
    })

}

module.exports=forcast

// request({url:url,json:true},(error,response)=>{

//     if(error){
//         console.log(error)
//     }else if(response.body.error){
//     console.log("No location found")
//     }else{
//     const data = JSON.parse(response.body)
//     console.log(console.body.currently)
//     console.log(response.body.daily.data[0].summary)
//     }
    
    
//     })