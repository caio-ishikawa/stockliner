import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Drawer from '../components/Drawer'

const styles = makeStyles({
    root:{
        backgroundColor: "#2A2B2E"
    }
})

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