//Load npm modules
const express = require('express')
const path = require('path')

//initialize or instantiate express package
const app = express()

//configure the public path in order to run index.html on the express server
const publicPath = path.join(__dirname,'public')

//use the static page 
app.use(express.static(publicPath))

//create a get route 
app.get('/', async(req,res)=> {
    try{
        res.render('index')
    }catch(e){
        res.send('<h1>Page Not Found</h1>')
    }
})

//confirguring the port to use 3000 on my local machine
const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`server started on ${port}`)
})