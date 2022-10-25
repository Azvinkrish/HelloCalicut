import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography, Button, useTheme, useMediaQuery} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import HamComponent from './HamComponent';
import { useSelector } from 'react-redux';
import  '../../App.css';


const Header = () => {

    const storeData = useSelector((store) => store?.users);
    const { userAuth } = storeData;
    const admin = (userAuth?.isAdmin)
    console.log(storeData);
    const navigate = useNavigate();

    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));



    
   
    return (
        <React.Fragment>   
            <AppBar className='appBar' sx={{ backgroundColor: "#0647899" }}>
            <Toolbar>
            
                    <Typography> Hello calicut</Typography>
                    {
                        isMatch ? (
                        <>
                        <HamComponent/>

                        </>
                    ) : (
                        <>
                        <Tabs textColor="inherit" 
                        alignitems="center"
                        value={value}
                        onChange={(e,value) => setValue(value)}        
                        indicatorColor="secondary">
                        
                    <Tab label="HOME" />
                    <Link to='/about'>
                    <Tab label="ABOUT" />
                    </Link>
                    <Tab label="BLOG" />
                    <Tab label="READ" /> 
                   
                    
                </Tabs>

                {
                    userAuth?(
                        <>
                        </>
                    ):(
                        <>

                <Button onClick={() => navigate("/login")} sx={{marginLeft:"auto"}} variant='contained'> LOGIN {" "}</Button>
                <Button onClick={() => navigate("/register")} sx={{marginLeft:"35px"}} variant='contained'> REGISTER {" "}</Button>
                        </>
                    )
                }

                

                 </>

                    )
                }
                   
                </Toolbar>
                
            </AppBar>
        </React.Fragment>
    )
}

export default Header