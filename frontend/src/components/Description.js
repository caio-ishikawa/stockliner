import Axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import { CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router';

const styles = makeStyles({
    cardContainer: {
        backgroundColor: "#FFFFFA",
        padding: "2%",
        marginBottom: "4%",
        height: "370px",
        overflow: "auto"
    },
    text: {
        textAlign: 'justify',
    },
    title: {
        textAlign: 'left'
    }
})

const Description = () => {
    const history =  useHistory()
    const searchValue = history.location.state
    const urlApi = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + searchValue +'&apikey=DWK7LDWIV19Q5J86'
    const [description, setDescription] = useState()
    const classes = styles()

    useEffect(() => {
        Axios.get(urlApi) 
        .then((res) => {
            const data = res.data['Description']
            setDescription(data)
        })
    })

    if (description) {
        console.log(description)
        return(
            <div>
                <Card className={classes.cardContainer} elevation={6}>
                    <CardHeader title="Company History" className={classes.title}/>
                    <Divider/>
                    <CardContent>
                        <Typography className={classes.text}>{description}</Typography>
                    </CardContent>

                </Card>
            </div>
        )
    } else{
        console.log(description)
        return(
            <div>
                <p>loading</p>
            </div>
        )
    }

}

export default Description