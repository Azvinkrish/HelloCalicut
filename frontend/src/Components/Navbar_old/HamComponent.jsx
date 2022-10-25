import {
    Drawer,
    List,
    ListItemText,
    ListItemButton,
    IconButton,
    ListItemIcon,
  } from "@mui/material";
  import {  Tabs, Tab, Button, useTheme, useMediaQuery} from '@mui/material';


  import React, { useState } from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  
  const Hamcomponent = () => {
    const [openDrawer, setOpenDrawer] = useState();

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
  
    return (
      <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText> 
                
                        <Tabs  textColor="inherit" 
                        alignitems="left"
                        value={value}
                        onChange={(e,value) => setValue(value)}        
                        indicatorColor="secondary">
                    <Tab label="HOME" />
                    <Tab label="ABOUT" />
                    <Tab label="BLOG" />
                    <Tab label="READ" /> 
                    
                </Tabs>

                <Button sx={{marginLeft:"auto"}} variant='contained'> LOGIN {" "}</Button>
                <Button sx={{marginLeft:"15px"}} variant='contained'> REGISTER {" "}</Button>
                
                
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      </React.Fragment>
    );
  };
  export default Hamcomponent;
  