import Axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
        height: "40%",
        overflow: "auto",
        maxHeight: "600px",
        backgroundColor: "#FBFBFB"
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
    const [name, setName] = useState()
    const tickerName = [] 

    useEffect(() => {
        Axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + searchValue + '&apikey=DWK7LDWIV19Q5J86')
            .then((res) => {
                if (res) {
                const data = res.data.Name
                const stockName = data.substring(0, data.indexOf(','))
                tickerName.push(stockName)
                console.log(tickerName[0])
                } else {
                    console.log('no response from alpha vantage')
                }
            })
            .then((response) => {
                Axios.get('https://content.guardianapis.com/search?section=business&q=' + tickerName + '&api-key=fbd25144-951c-40ac-8dfa-63fdd9a1eb06')
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
                <Card className={classes.cardContainer} overflow="auto">
                    <Typography variant="h5">Headlines</Typography>
                    <Divider/>
                    {title.map((headline) => { 
                        return(
                        <div>
                            <CardContent>
                                <Typography className={classes.title}>
                                    {headline}
                                </Typography>
                                <Divider/>
                            </CardContent>
                        </div>
                        )
                    }
                    )}
                    
                </Card>

            </div>
        )
    } else{
        //fetchData()
        return(
            <div>
                <p>no title</p>
            </div>
        )
    }
}

export default GetNews
