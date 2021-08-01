import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { useState, useEffect } from "react"
import Axios from "axios"
import { useHistory } from "react-router"
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

const Registration = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const history = useHistory()

    const register = () => {
        console.log(usernameReg, passwordReg)
        Axios.post('http://localhost:3002/signup', {
            username: usernameReg,
            password: passwordReg
        })
        .then((res) => {
            console.log(res)
            console.log('test')
        })
        history.push('/')
        alert('Succesfully signed up!')
    }

    const classes = styles()
    return(
        <div className={classes.div}>
            <form>
                <Card className={classes.card} elevation={6}>
                    <CardHeader title="Sign up" className={classes.title}/>
                    <Divider/>
                    <CardContent>
                        <div>
                            <TextField id="username" label="Username" onChange={(e) => {setUsernameReg(e.target.value)
                            console.log(e.target.value)}}/>
                        </div>
                        <div>
                            <TextField id="password" label="Password" onChange={(e) => {setPasswordReg(e.target.value)}} className={classes.password}/>
                        </div>
                        <Button variant="contained" color="primary" onClick={register} className={classes.button}>Sign up</Button>
                    </CardContent>
                </Card>
            </form>
        <br/>
        </div>
    )
}

export default Registration