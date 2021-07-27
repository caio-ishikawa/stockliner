import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { useHistory, withRouter, Link, Router } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles'
import { classExpression } from '@babel/types';
import { Typography } from '@material-ui/core';


const styles = makeStyles({
    sidebar: {
        width:  250,
    },
    menu: {
        background: '#2A2B2E'
    }
})


const Drawer = () => {
    const [open, setOpen] = useState(false)
    let history = useHistory()

    const classes= styles()
    return(
        <div>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => setOpen(true)}>
                <MenuIcon></MenuIcon>
            </IconButton>
            <div>
                <SwipeableDrawer classes={{paper: classes.menu}} anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => {}}>
                    <div className={classes.sidebar}>
                        <List>
                            <ListItem button>
                                <ListItemText primary={<Typography type="body2" style={{color: 'white'}}>Home</Typography>}/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary={<Typography type="body2" style={{color: 'white'}}>Top Movers</Typography>}/>
                            </ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
        </div>
    )
}

export default Drawer
