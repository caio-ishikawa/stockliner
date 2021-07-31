import Axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    title: {
        fontSize: 15,
        textAlign: "left",
    },
    card: {
        width: "90%",
        margin: "2% auto 0 auto"
    },
    cardContainer: {
        width: "100%",
        padding: "2%",
        minHeight: "653px",
        overflow: "auto",
        maxHeight: "600px",
        backgroundColor: "#FFFFFA"
    },
    cardChild: {
        marginTop: "1%"
    },
    news: {
        marginTop: "2%",
    }
})

const GetNews = () => {
    const history = useHistory()
    const searchValue = history.location.state
    const titles = []
    const [title, setTitle] = useState() 
    //const [name, setName] = useState()
    const tickerName = [] 

    useEffect(() => {
        Axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + searchValue + '&apikey=DWK7LDWIV19Q5J86')
            .then((res) => {
                if (res) {
                const data = res.data.Name
                console.log(data)
                if (data) {
                    if (data.length > 0) {
                        for (var i = 0; i < data.length; i++ ) {
                            if (data[i] === ' '){
                                const stockName = data.substring(0, data.indexOf(' '))
                                if (stockName != ''){
                                    tickerName.push(stockName)
                                }
                            } else {
                                const stockName = data.substring(0, data.indexOf(','))
                                if (stockName != ''){
                                    tickerName.push(stockName)
                                }
                            }
                        }
                    }
                }
                console.log(tickerName)
                } else {
                    console.log('no response from alpha vantage')
                }
            })
            .then((response) => {
                Axios.get('https://content.guardianapis.com/search?section=business&q=' + tickerName[0] + '&api-key=fbd25144-951c-40ac-8dfa-63fdd9a1eb06')
                .then((data) => {
                    console.log(tickerName)
                    const results = data.data.response['results']
                    for (var i = 0; i < results.length; i++) {
                        titles.push(results[i].webTitle)
                    }
                    setTitle(titles)
                })
            })
    },[])

    const classes = useStyles()
    if (title){
        return(
            <div>
                <Card className={classes.cardContainer} overflow="auto" elevation={6}>
                    <CardHeader className={classes.title} title="Headlines"/>
                    <Divider/>
                    {title.map((headline) => { 
                        return(
                            <div>
                                <Card className={classes.cardChild} elevation={0}>
                                    <CardContent>
                                        <Typography className={classes.title}>
                                            {headline}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Divider/>
                            </div>
                            )
                        }
                    )}
                </Card>
            </div>
        )
    } else{
        return(
            <div>
                <p>no title</p>
            </div>
        )
    }
}

export default GetNews
