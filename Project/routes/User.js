const router = require('express').Router();
const UserRegistration = require('../models/User');
const jwt = require('jsonwebtoken');



// register User----------------------------
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const empType = req.body.empType;
    

    const newuser = new UserRegistration({

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


router.post("/login", async (req,res) => {
    const user = await UserRegistration.findOne({email:req.body.email, password:req.body.password, empType:req.body.empType});
    if (user){

        
    const tokendetails= {email:req.body.email};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

    const data = {
        status:true,
        email:user.email,
        empType:user.empType,
        id:user._id,
        accesstoken: accessToken,
        name:user.name
    };

        res.send(data)
    }else{
        res.send({
            status:false
        })
    }
})


//---------------------------------------------




module.exports = router;