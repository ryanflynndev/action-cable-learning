import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChatIcon from '@material-ui/icons/Chat';
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { spacing } from '@material-ui/system'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },

  chatrooms: {
    flex: 1,
    display: 'grid',
      textTransform: 'none',
      fontSize: '1.25rem',
      font: 'Roboto',
    width: '150px',
    margin: 'right'
  },

  login: {
    // spacing: 'mx.margin-right'
  }
  


}));

function chatroomClickHandler(e) {
  console.log('CHATROOM CLICKED')
  window.location.href='/chatrooms'

}

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.ChatIcon} color="inherit" aria-label="menu">
            <ChatIcon />
          </IconButton>
          <Typography variant="h6"  className={classes.title}>
            ChatApp
          </Typography>
          
          <Button variant="h6" className={classes.chatrooms} onClick={chatroomClickHandler}>
            Chatrooms
          </Button>
        
          <Button color="inherit" className={classes.login}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}