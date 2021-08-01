import { useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles"; 
import Typography  from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from 'react'
import { LoginContext, UsernameContext } from "../components/UserContext";
import { useContext } from "react";


const styles = makeStyles({
    input:{
        width: "60%",
    },
    button: {
        marginTop: "2%"
    },
    title: {
        marginBottom: "5%",
        marginTop: "10%"
    }
})


const Homepage = () => {
    const { loginUsername, setLoginUsername } = useContext(UsernameContext)
    const { loggedIn, setLoggedIn} = useContext(LoginContext)
    const classes = styles()
    const history = useHistory()
    const userusername = history.location.state
    console.log(userusername)
    const [ticker, setTicker] = useState('')

    const routeChange = () => {
        let path = '/results'
        let state = ticker
        if(ticker){
            history.push(path, state)
        }
    }

    const handleChange = (e) => {
        setTicker(e.target.value)
        console.log(e.target.value)
    }

    console.log("log in status homepage: " + loggedIn)


    return(
        <div>
            <div className={classes.title}>
                <Typography variant="h2">StockLiner</Typography>
                {loginUsername ? 
                    <div>
                        <Typography variant="subtitle">Welcome, {loginUsername}</Typography>
                    </div>
                    :
                    <p></p>
                }
            </div>
            <form>
                <TextField onChange={handleChange} className={classes.input} id="ticker" label="TSLA, IBM, AAPL..."/>
            </form>
            <Button onClick={routeChange} className={classes.button} variant="contained" color="primary">Search</Button>
            
        </div>
    )
}

export default Homepage