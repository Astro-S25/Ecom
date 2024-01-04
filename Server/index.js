const express = require ('express');
const app =express();
const path=require ('path');
const cors=require('cors');



app.use(express.static(path.join(__dirname,'../Client','../Client/public','../Client/src')));
app.use(express.urlencoded({extended:false}))
app.use(cors);

app.get("/",(req,res,)=>{
    res.render('index.html')

    const clicked=req.body.buttonClicked;
    if(clicked){
        res.send('./ExploreAll')
    }
    else{
        console.log('error button')
    }
})


app.listen( 5000,()=>{
    console.log("server started at port 5000")
})
