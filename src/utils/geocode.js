const request =require('request')
const geocode=(a,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+a+".json?access_token=pk.eyJ1IjoiZWxlY3Ryb3dvcm0iLCJhIjoiY2s4ZnY5dXM5MDV3YjNvbXNrcGZtajk2diJ9.CCNG3RADPbsZqRBTpIGLgA"

    request({url,json:true},(error,{body})=>{
        if(error){
            console.log(error)
        }else if(body.features.length==0){
            console.log("Change teh search term")
        }else{
//console.log(body)
           const latitude=body.features[0].center[1]
            const longitude=body.features[0].center[0]
            callback(error,{latitude,longitude})
        }
    
    })
}



module.exports=geocode