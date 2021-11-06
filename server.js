const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

var db = [
    {
        name: "Arthur",  
        email: "arthur@gmail.com"
    },
    {
        name : "Lucas",
        email: "lucas@gmail.com"

    },
    {
        name : "João",
        email: "jao@gmail.com"

    }

]


app.get('/', (req, res) =>{
    return res.json(db)
})

app.listen('4567')
