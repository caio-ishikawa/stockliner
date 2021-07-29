import { useHistory } from "react-router"

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

export default UsernameTab