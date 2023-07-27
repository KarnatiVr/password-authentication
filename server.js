const ErrorHandler= require('./Middleware/ErrorHandlers.js')
const router= require('./Routers/routers.js')
const express=require('express')

const app=express()


users=[]

app.use(express.json())

app.use('/',router)

app.use(ErrorHandler)

app.listen(3000,()=>{
    console.log('listening')
})


