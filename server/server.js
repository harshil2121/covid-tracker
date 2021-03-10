const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const sequelize = require("sequelize")
const {db} = require("./db/index")
const app = express()

// so we can access different domain of website
app.use(cors())
// so we access json data from front-end
app.use(bodyParser.json())

//starting database?

db.sequelize.authenticate();
db.sequelize.sync().then(async ()=> {
    console.log("Database connected")
})

// app.get("/", async (req,res)=>{
    
// //   let query="SELECT * FROM details WHERE username='" + req.body.username + "' and password='" + req.body.Password + "'";
//     const result = await db.user.findAll({
        // attributes: ["id","username"] 
        // ,where:{
        //     username:req.body.username,
        //     password:req.body.password
        // }
//     })

app.post("/Login", async (req,res)=>{
    const result = await db.user.findOne({
        attributes: ["id","username","password"] 
        ,where:{
            username:req.body.username,
            password:req.body.password
        }
    })
    if(result)
    {
        res.send({message:"Login Successfully",result:result,status:true})
    }
    else{
        res.send({message:"Invalid Name",result:null,status:false})
    }
        // res.send({result:result, message:"Login successfully..."})
        
})

    app.post("/Signup", async (req,res)=>{
        const result = await db.user.findOne({
            attributes: ["id","username"] 
            ,where:{
                username:req.body.username,
            }
        })
        if(result)
        {
            res.send({message:"all redy exist",result:null,status:true})
        }
        else{
            const result = db.user.create({
                username:req.body.username,
                Password:req.body.password,
                email:req.body.email
            })
            res.send({message:"Signup success",result:result,status:false})
        }
            
    })
    // const result = await db.user.destroy({
    //     where:{
    //         id:1
    //     }
    // })
    
// })


// app.post("/", async (req,res)=>{
//         const result = await db.user.create({
//             username:"nikunj",
//             password:"nik33",
//             email:"har12@gmail.com",  
//         })
        // const result = await db.user.update({
        //     username:"nikunj_123",
        //     password:"nikunj",
        //     email:"nikunj",  
        // },
        // {
        //     where:{
        //         username:"nikunj"
        //     }
        // }
        // )
        
        // res.send(result) 
    // })
// server will run on this prot
app.listen(8081,()=>{   
    console.log ('server running put')
})