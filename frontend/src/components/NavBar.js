import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Drawer from '../components/Drawer'
import { useHistory } from 'react-router';

const styles = makeStyles({
    root:{
        backgroundColor: "#2B2D42"
    }
})

const UsernameTab = () => {
    const history = useHistory()
    const username = history.location.state
    console.log(username)

    return(
        <div>
            <p>{username}</p>
        </div>
    )
}


const NavBar = () => {
    const classes = styles()

    return(
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Drawer/>
                    <Typography variant="h5">StockLiner.io</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar