const asyncHandler = require('express-async-handler');
const User = require('../../models/usersModel');
const generateToken = require('../../config/generateToken');
const validateMongoId = require('../utils/validateMongodbID');




//Register User 
const userRegister = asyncHandler( async(req,res) => { 
    const userExist = await User.findOne({email:req?.body?.email});
    if (userExist)
    throw new Error ("User already Exist");
    try {
        const user = await User.create({
            name:req.body && req.body.name,
            nickName:req.body && req.body.nickName,
            email:req.body && req.body.email,
            password:req.body && req.body.password,
        })
        res.json({user});
        

    } catch (error) {
        res.json(error)

    }
})

//Login User
const userLogin = asyncHandler(async(req,res) => {
    const { email, password } = req?.body;
    const userAvail = await User.findOne({email})
    // check pasword is match
    if(userAvail && (await userAvail.isPasswordMatched(password))){
        res.json({
            _id: userAvail?._id,
            name: userAvail?.firstName,
            nickName: userAvail?.lastName,
            email: userAvail?.email,
            profilePhoto: userAvail?.profilePhoto,
            isAdmin: userAvail?.isAdmin,
            token: generateToken(userAvail?._id),
            isVerified:userAvail?.isAccountVerified,
            following:userAvail?.following
        })
    }else{
        res.status(401);
        throw new Error("Invalid Login credentials");
    }
})


//Fetching all users
const fetchUserControl = asyncHandler(async(req,res) =>{
    console.log(req.headers)
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error)
        
    }
})

//Delete user 
const deleteUserControl = asyncHandler(async(req,res) => {
    const {id} = req.params
    
    //check id is valid
    validateMongoId(id);
    try {
        const deletedUser = await User.findByIdAndDelete({id})
        res.json(deletedUser);
        
    } catch (error) {
        res.json(error) 
        
    }

})
module.exports = {userRegister, userLogin, fetchUserControl,deleteUserControl}