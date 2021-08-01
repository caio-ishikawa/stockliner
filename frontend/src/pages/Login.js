import Axios from 'axios'
import { useContext, useState } from 'react'
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router'
import { LoginContext, UsernameContext } from '../components/UserContext'
import { Card, CardContent, CardHeader, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#FFFFFA" 
        }
    }
})

const styles = makeStyles({
    card: {
        width: "300px",
        margin: "auto",
        backgroundColor: "#FFFFFA"
    },
    div: {
        marginTop: "10%"
    },
    title: {
        marginTop: "3%"
    },
    button: {
        marginTop: "3%"
    },
    password: {
        marginBottom: "5%"
    }
})

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const {loginUsername, setLoginUsername} = useContext(UsernameContext)
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
    const history = useHistory()

    const login = () => {
    setLoginUsername(username)
    Axios.post('http://localhost:3002/login', {
        username: username,
        password: password
    }) 
    .then((res) => {
        if (res.data.length > 0) {
            setAuth(true)
            setLoggedIn(true)
            setLoginUsername(username)
            console.log('logged in')
            let path = '/'
            let state = loggedIn 
            history.push(path, state)
            console.log('login state login page: ' + loggedIn)
        } else{
            alert('Please check your username/password.')
            console.log(res)
        }
    })
    }

    const classes = styles()
    return(
        <div className={classes.div}>
            <form>
                <Card className={classes.card} elevation={6}>
                    <CardHeader title="Log in" className={classes.title}/> 
                    <Divider/>
                    <CardContent>
                        <div>
                            <TextField id="usernameReg" label="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
                        <div>
                            <TextField id="passwordReg" label="Password" onChange={(e) => {setPassword(e.target.value)}} className={classes.password}/>
                        </div>
                        <Button variant="contained" color="primary" onClick={login} className={classes.button}>Log in</Button>
                    </CardContent>
                </Card>
            </form>
        </div> 
    )
}

export default Login