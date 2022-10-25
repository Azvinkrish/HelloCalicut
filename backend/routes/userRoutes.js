const express = require('express');
const { 
        userRegister,
        userLogin, 
        fetchUserControl,
        deleteUserControl
         } = require('../controllers/Users/userController')

const userRouter = express.Router();

userRouter.post('/register',userRegister);
userRouter.post('/login',userLogin);


userRouter.get('/',fetchUserControl)
userRouter.delete('/:id',deleteUserControl)

module.exports = userRouter;