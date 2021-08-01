import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Drawer from '../components/Drawer'
import { useHistory } from 'react-router';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LoginContext, UsernameContext } from './UserContext';
import { useContext } from 'react';
import { ContactSupportOutlined } from '@material-ui/icons';
import { LaptopWindows } from '@material-ui/icons';

const styles = makeStyles({
    root:{
        backgroundColor: "#2B2D42"
    },
    button: {
        backgroundColor: "#26C485",
        textDecoration: "none",
        borderRadius: "5px",
        marginTop: "4%"
    },
    buttonText: {
        color: "white"
    },
    signoutButton: {
        backgroundColor: "#f04c41",
        textDecoration: "none",
        borderRadius: "5px",
        marginTop: "4%",
        color: "white"
    }
})

const NavBar = () => {
    const {loginUsername, setLoginUsername} = useContext(UsernameContext)
    const {loggedIn, setLoggedIn} = useContext(LoginContext)
    console.log(loggedIn + "WWWWAWAAAAAA")
    const history = useHistory()
    const state = history.location.state
    console.log(state)
    const classes = styles()

    console.log('log in status navbar: ' + loggedIn )

    const handleSignOut = () => {
        setLoggedIn(false)
        window.location.reload()  
    }


    return(
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid justify="space-between" container spacing={24}>
                        <Grid item>
                            <Drawer/>
                        </Grid>
                        <Grid item>
                            <div>
                                {loggedIn ? 
                                    <div>
                                        <Button variant="contained" className={classes.signoutButton} onClick={handleSignOut}>Sign out</Button>
                                    </div>
                                    :
                                    <div>
                                        <ButtonGroup color="primary" variant="contained">
                                            <Link to="/login" className={classes.button}>
                                                <Button className={classes.buttonText}>Log in</Button>
                                            </Link>
                                            <Link to="/registration" className={classes.button}>
                                                <Button className={classes.buttonText}>Register</Button>
                                            </Link>
                                        </ButtonGroup>
                                    </div>
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar