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
    // flex: 1,
    
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

function chatroomClickHandler() {
  window.location.href='/chatrooms'
}

function createChatroomClickHandler() {
  window.location.href='/create-chatroom'
}

const chatHomeClickHandler = () => {
  window.location.href='/'
}

const signOutClickHandler = () => {
  localStorage.removeItem('token')
  window.location.href='/'
}

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.ChatIcon} color="inherit" aria-label="menu">
            <ChatIcon onClick={chatHomeClickHandler}/>
          </IconButton>
          <Typography variant="h6"  className={classes.title}>
            I Hate CSS
          </Typography>
          <Button edge="start" variant="h6" className={classes.chatrooms} onClick={chatroomClickHandler}>
            Chatrooms
          </Button>
          <Button edge="start" variant="h6" className={classes.chatrooms} onClick={createChatroomClickHandler}>
            Create 
          </Button>
          <Button edge="start" variant="h6" className={classes.chatrooms} onClick={signOutClickHandler}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}