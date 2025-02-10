const express = require("express")
const app = express()
const PORT = 8000
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.post("/register",(req,res)=>{
    const {username,email,password,dob} = req.body;
    if(!username){
        return res.status(400).json({message:`Username cannot be empty`})
    }
    if(!email){
        return res.status(400).json({message:`Email cannot be empty`})

    }
    const len = password.length;
    if(len<8 || len>16){
        return res.status(400).json({message:`Password length should be greater then 8 or less than or equal to 16`})
    }
    return res.status(200).json({message:`Registration Success!`})


})

app.listen(PORT,()=>{
    console.log(`Running in localhost:${PORT}`)
})



