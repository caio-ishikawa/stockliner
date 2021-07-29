import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { useState, useEffect } from "react"
import Axios from "axios"

const Registration = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        console.log(usernameReg, passwordReg)
        Axios.post('http://localhost:3002/signup', {
            username: usernameReg,
            password: passwordReg
        })
        .then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <div>
                <form>
                    <TextField id="username" label="Username" onChange={(e) => {setUsernameReg(e.target.value)
                    console.log(e.target.value)}}/>
                    <TextField id="password" label="Password" onChange={(e) => {setPasswordReg(e.target.value)}}/>
                </form>
                <button onClick={register}>Sign up</button>
            </div>
            <br/>
        </div>
    )
}

export default Registration