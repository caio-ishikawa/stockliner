import Axios from 'axios'
import { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { classExpression } from '@babel/types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        fontSize: 14,
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
        maxHeight: "600px"
    },
    news: {
        marginTop: "2%",
    }
})

const GetNews = () => {
    const value = 'IBM'
    const urlApi = 'https://content.guardianapis.com/search?section=business&order-by=relevance&q=' + value + '&api-key=fbd25144-951c-40ac-8dfa-63fdd9a1eb06'
    const titles = []
    const [title, setTitle] = useState() 

    /// get data from guarian API and return 10 results sorted by relevance over the last year ///
    const fetchData = async() => {
        await Axios.get(urlApi)
        .then((res) => {
            const results = res.data.response['results']
            for (var i = 0; i < results.length; i++) {
                titles.push(results[i].webTitle)
            }
        })
        setTitle(titles)
        console.log(titles)
    }
    
    const classes = useStyles()
    if (title){
        return(
            <div>
                <Card className={classes.cardContainer} overflow="auto">
                    <h3>Headlines</h3>
                    {title.map((headline) => 
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title}>
                                {headline}
                            </Typography>
                        </CardContent>
                    </Card>
                    )}
                </Card>

            </div>
        )
    } else{
        fetchData()
        return(
            <div>
                <p>no title</p>
            </div>
        )
    }
}

export default GetNews
