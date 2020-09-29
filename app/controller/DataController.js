// const express = require('express')
const express=require('express')
const router=express.Router()
const {Data}=require('../model/Data')

router.post('/add',(req,res)=>{

    const data=new Data(req.body)
    data.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>res.send(err))
})

router.get('/all', async function(req,res){
    let allData=await Data.find()
    return res.send(allData)

})

router.put('/edit/:id',async(req,res)=>{
    const id=req.params.id
    const body=req.body
    let form=await Data.findByIdAndUpdate({_id:id},body,{new:true,runValidators:true})
    .then(form=>{
        res.send(form)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/:id',(req,res)=>{
    const id=req.params.id
    Data.findOne({
        _id:id
    })
    .then((form=>{
        res.send(form)
    }))
    .catch(err=>console.log(err))

})

router.delete('/delete/:id',(req,res)=>{
    const id =req.params.id
    Data.findByIdAndDelete(id)
    .then((form=>{
        res.send(form)
    }))
    .catch(err=>{
        res.send(err)
    })

    // let form=await Data.findByIdAndDelete({_id:id})
    // .then(form=>{
    //     res.send(form)
    // })
    // .catch(err=>console.log(err))
})


module.exports={
    datarouter:router
}