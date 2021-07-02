const express= require('express');
const app=express();

app.set('view engine','ejs');
app.set('views'.__dirname+'/views');




//ruta url
app.get('/',(req,res)=>{
   // res.send('hola respu')

   res.render("index",{titulo:"gato 21"})
})





app.get('/servicios',(req,res)=>{
   // res.send('hola servicio')
   res.render("servicios",{titulo:"gato 22"})
})

app.listen(3000,()=>{
    console.log('port 3000')
})

app.use(express.static(__dirname + "/public"))


app.use((req,res,next)=>{
    res.status(404).render("404",{titulo:"error 404", descripcion:"algo mal"})
})