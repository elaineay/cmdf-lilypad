import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css'; 


export default function Header() {

  return (

      <AppBar position="static" className ="top">
        <Toolbar className = "container2">
          <Typography variant="h6" color="inherit" >
            Lilypads
          </Typography>
          <div className = "buttons">
          <Button color="inherit" href= "/add">Add</Button>
          <Button color="inherit" href= "/find">Find</Button>
          </div>
        </Toolbar>
      </AppBar>

  );
}
