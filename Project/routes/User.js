const router = require('express').Router();
const UserRegistration = require('../models/User');
const jwt = require('jsonwebtoken');



// register User----------------------------
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const empType = req.body.empType;

    const userID = req.body.userID;
    

    const newuser = new UserRegistration({
        userID,
        name,
        email,
        password,
        empType,
    })

    newuser.save().then(()=>{
        res.json("New User Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//---------------------------------------------------


//login----------------------------------------





//---------------------------------------------




module.exports = router;