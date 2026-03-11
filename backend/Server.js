const express=require('express');
const app=express();
app.get('/',(req,res)=>{
        res.send("get route is working");

    })
app.post('/',(req,res)=>
{
    res.send("post route is working");
})
app.put('/',(req,res)=>
{
    res.send("put Route is working ");

})
app.delete('/',(req,res)=>{
    res.send("delete route is working");
})

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});
