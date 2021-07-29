import Axios from 'axios'
import { useState } from 'react'
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
    Axios.post('http://localhost:3002/login', {
        username: username,
        password: password
    }) 
    .then((res) => {
        console.log(res)
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