const express = require("express")
const app = express();
const port = 3000;


app.get("/details",(req,res)=>{
    res.send({data : "my animal"})
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})






