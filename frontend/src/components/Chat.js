import { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { LoginContext } from './UserContext'
import { useContext } from 'react'
import Axios from 'axios'


const Chat = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext) 



    return(
        <div>
            <p>test</p>
        </div>
    )


}

export default Chat