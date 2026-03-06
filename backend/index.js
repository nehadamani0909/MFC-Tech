const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(express.json())

app.use(cors())

//test controller
app.get('/get',(req,res)=>{
    res.status(200).json({message: "server running"});
})

app.post('/post',(req,res)=>{
    const {text} = req.body;
    res.status(200).json(`${text} is posted`);
})

app.listen(port,()=>
    console.log(`Server running on http://localhost:8080`)
)