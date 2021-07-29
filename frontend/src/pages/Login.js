import Axios from 'axios'
import { useContext, useState } from 'react'
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router'
import { LoginContext } from '../components/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
    const history = useHistory()

    const login = () => {
    Axios.post('http://localhost:3002/login', {
        username: username,
        password: password
    }) 
    .then((res) => {
        if (res.data.length > 0) {
            setAuth(true)
            setLoggedIn(true)
            console.log('logged in')
            let path = '/'
            let state = username
            history.push(path, state)
        } else{
            console.log(res)
        }
    })
    }

    return(
        <div>
            <form>
                <TextField id="usernameReg" label="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                <TextField id="passwordReg" label="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            </form>
            <Button onClick={login}>Log in</Button>
        </div> 
    )
}

export default Login