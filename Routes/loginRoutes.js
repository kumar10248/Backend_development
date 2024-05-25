const express = require("express");
const router = express.Router();

const user = require("../Models/user");
router.post("/signup", async (req, res) => {
  const { email, password, age, name } = req.body;
  const userexist = await user.findOne({ email });
  if (userexist) {
    res.status(200).json({ msg: "already exists!" });
  } else {
    const User = new user({
      email,
      password,
      name,
      age,
    });
    User.save();
    res.status(200).json({ msg: "Account Created Successfully" });
  }
});
router.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const userexist = await user.findOne({ email,password });
    if(userexist){
        res.status(200).json({ msg: "Login successfully" , userexists:{email:userexist.email,name:userexist.name,age:userexist.age}});

    }
    else{
        res.status(200).json({msg:"Account doesn't exist"});

    }
})
module.exports = router;
