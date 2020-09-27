const express=require('express')
const router=express.Router()
// const {usersRouter}=require('../app/controllers/UserController')
// const {reservationsRouter}=require('../app/controllers/ReservationController')
const {datarouter}=require('../app/controller/DataController')

// router.use('/users',usersRouter)
// router.use('/reservation',reservationsRouter)
router.use('/data',datarouter)

module.exports={
    routes:router
}