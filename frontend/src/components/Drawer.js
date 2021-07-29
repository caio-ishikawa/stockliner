import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { useHistory, withRouter, Link, BrowserRouter, Switch } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';



const styles = makeStyles({
    sidebar: {
        width:  250,
    },
    menu: {
        background: '#2B2D42'
    }
})



const Drawer = () => {
    const [open, setOpen] = useState(false)
    const classes= styles()
    const history = useHistory()
    return(
        <div>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => setOpen(true)}>
                <MenuIcon></MenuIcon>
            </IconButton>
            <div>
                <SwipeableDrawer classes={{paper: classes.menu}} anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => {}}>
                    <div className={classes.sidebar}>
                        <List>
                            <Link to="/">
                                <ListItem button>
                                    <ListItemText primary={<Typography type="body2" style={{color: 'white'}}>Home</Typography>}/>
                                </ListItem>
                            </Link>
                            <Link to="/registration">
                                <ListItem button>
                                    <ListItemText primary={<Typography type="body2" style={{color: 'white'}}>Register</Typography>}/>
                                </ListItem>
                            </Link>
                            <Link to="/login">
                                <ListItem button>
                                    <ListItemText primary={<Typography type="body2" style={{color: 'white'}}>Login</Typography>}/>
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
        </div>
    )
}

export default Drawer
