import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChatIcon from '@material-ui/icons/Chat';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { spacing } from '@material-ui/system'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  rightSide: {
    display: 'flex',


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
  },

  leftSide: {




  }
}));



const StyledBadge = withStyles((theme) => ({
  
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default function ButtonAppBar(props) {
	const classes = useStyles();

	let history = useHistory();

	function chatroomClickHandler() {
		history.push('/chatrooms');
	}

	function createChatroomClickHandler() {
		history.push('/create-chatroom');
	}

	const chatHomeClickHandler = () => {
		history.push('/');
	};

	const signOutClickHandler = () => {
    	localStorage.removeItem('token');
		window.location.href = '/'
		
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						style={leftSide}
						className={classes.ChatIcon}
						color="inherit"
						aria-label="menu"
					>
						<ChatIcon onClick={chatHomeClickHandler} />
					</IconButton>
					<Typography style={leftSide} variant="h6" className={classes.title}>
						ChatBox
					</Typography>
					<Button
						style={leftSide}
						edge="start"
						variant="h6"
						className={classes.chatrooms}
						onClick={chatroomClickHandler}
					>
						Chatrooms
					</Button>
					<Button
						style={leftSide}
						edge="start"
						variant="h6"
						className={classes.chatrooms}
						onClick={createChatroomClickHandler}
					>
						Create
					</Button>
					<div style={blank} />
					<Box style={rightSide}>
						<StyledBadge
							overlap="circle"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							variant="dot"
						>
							<Avatar
								alt={props.user.user.username}
								src={props.user.user.avatar}
							/>
						</StyledBadge>
						<Button
							style={rightSide}
							variant="h6"
							className={classes.chatrooms}
							onClick={signOutClickHandler}
						>
							Sign Out
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}


const rightSide = {
  display: 'flex',
 justifyContent: 'flex-start'
}

const leftSide = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const blank = {
  flexGrow: 1
}