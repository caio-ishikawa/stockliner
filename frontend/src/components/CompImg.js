import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const CompImg = () => {
    const history = useHistory()
    const value = history.location.state
    const searchValue = value.toUpperCase()
    const [link, setLink] = useState()
    const links = []
    console.log(searchValue)

    var int = 0

    if (int === 0) {
        console.log('link is null')
        Axios.get('https://api.polygon.io/v1/meta/symbols/' + searchValue + '/company?&apiKey=u0O5gF44EyZmm6nMXjtB6IUzGJW_4qFB')
        .then((res) => {
            const name = res.data.name
            var words = name.substr(0, name.indexOf(' ')) 
            var imgLink = '//logo.clearbit.com/' + words + '.com'
            links.push(imgLink)
            setLink(links)
            console.log(links)
            console.log('function running')
            int = 1
        })
    } else{
        console.log('link is not null')
    }


    return(
        <img src={link} height={40}/>
    )
}

export default CompImg