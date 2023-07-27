const express= require('express')
const bcrypt= require('bcrypt')

const router= express.Router()

router.route('/').post( async (req,res,next)=>{
    const username= req.body.username;
    const password= req.body.password;
    try{
    
    const salt= await bcrypt.genSalt()    
    const hashedPassword= await bcrypt.hash(password,salt)
    users.push([username,hashedPassword])
    res.end('done')
    }
    catch(error){
        next(error)
    }
}).get((req,res)=>{
    res.json(users)
})

router.route('/login').get( async (req,res,next)=>{
    const user= req.body.username;
    const password= req.body.password;
    var found=false;
    var index=0;

    if(user=="" || password == null){
        res.end('both the fields must be filled')
    }
    else{
    for(i=0;i<users.length;i++){
        if(users[i][0]== user){
            found= true  
            index=i;
            
        } 
    }
}
    if(found){
        
        console.log(index)
    }
    else{
        res.end('user not found')
    }
    try{
      console.log(users[index][1])
      if(await bcrypt.compare(password,users[index][1])){
        res.end('logged in')
      }
      else{
        res.end('invalid password')
      }
    }
    catch(err){
        next(err)
    }
})

module.exports= router