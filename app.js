const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.listen(port, () =>{
    console.log(port + ' ' + ' spun up and ready to rock')
    
})