import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Features/slices/userSlice';




const store=configureStore({
    reducer:{
     
      users:userReducer  

    },
});

export default store;