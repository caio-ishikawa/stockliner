import Axios from 'axios'
import { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import {ImageList, ImageListItem} from '@material-ui/core'
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
    const value = 'IBM'
    const history = useHistory()
    const searchValue = history.location.state
    const url = null
    const urlApi = 'https://content.guardianapis.com/search?section=business&order-by=relevance&q=' + value +  '&show-fields=thumbnail&api-key=fbd25144-951c-40ac-8dfa-63fdd9a1eb06'
    const titles = []
    const images = []
    const [title, setTitle] = useState() 
    const [thumbnails, setThumbnails] = useState()



    /// get data from guarian API and return 10 results sorted by relevance over the last year ///
    const fetchData = async() => {
        await Axios.get(urlApi)
        .then((res) => {
            const results = res.data.response['results']
            for (var i = 0; i < results.length; i++) {
                titles.push(results[i].webTitle)
                images.push(results[i].fields.thumbnail)
            }
        })
        setThumbnails(images)
        setTitle(titles)
        //console.log(title)
    }

    
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
        fetchData()
        return(
            <div>
                <p>no title</p>
            </div>
        )
    }
}

export default GetNews
