const express=require('express')
const app=express()
const morgan=require('morgan')
const faker=require('faker')
//los midlwares
app.listen(3000)
app.use(morgan("dev"));
app.use(express.json());//parsear 


let tienda=[];
for(let i=0;i<50;i++){
    //faker llenado de datos aleatorios
    let name=faker.commerce.productName();
    let description=faker.commerce.productDescription();
    let materiales=faker.commerce.productMaterial();
    let price=faker.commerce.price();
    const product={
        id:i,
        name:name,
        description:description,
        materiales:materiales,
        price:price,
    };
    tienda.push(product);
}

app.get('/tienda',(req,res)=>{
 const {material}=req.query//peticiones a la url
 if(material){
 const obj = tienda.filter(obj=>obj.materiales===material)
 if(obj>0){
     res.status(200).json(obj)
 }else{
     res.status(400).json({mesaje:"material no se encuentra"})
 }
 }else {
     res.status(200).json(tienda);
 }

 res.status(200).json(tienda);
})


//peticion get para traerme  con param ..parametros
app.get('/tienda/:id:pepe',(req,res)=>{

    const {id}=req.params;
    //res.status(200).json(`mi Id ees ${id} y mi nombres esd ${pepe}`)
    
        const tiendaId=tienda.filter((tienda)=>tienda.id===id);
        if(tiendaId){
        res.status(200).json(tiendaId)
    } else{
        res.status(404).json({error:"No se encontro"});
    }
    })