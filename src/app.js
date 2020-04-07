const express=require('express')
const path=require('path')
const hbs=require('hbs')
const forcast=require('./utils/forecast')
const geocode=require('./utils/geocode')

// nodomon src/app.js -e js,hbs => to add the extensions of the files for you want the server to restart for changes 

const app=express()

// Define paths for express config
const publicpath=path.join(__dirname,'../public') // .. => to go up the folder
const viewpath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials') 

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)

//setup static directory to serve
app.use(express.static(publicpath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Abhay'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Node js',
        name:'Abhay'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Visa',
        message:"I love you Anshika"
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:"Provide correct address"
        })
    }

    geocode(req.query.address,(error,{latitude,longitude}={})=>{
        if(error){
            return res.send({error})
        }
        forcast(longitude,latitude,(error,data)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                error:error,

                forcast:data
            })
        })
    })

})

app.get('/products',(req,res)=>{
    if(res.query.search){
        return res.send({error:"Search term is not correct"})
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        name:'Abhay',
        error:'help 404'
    })
})

app.get('*',(req,res)=>{
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
