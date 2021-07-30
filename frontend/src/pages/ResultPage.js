import GetData from '../util/GetData'
import GetNews from '../util/GetNews'
import GetFinanceData from '../components/GetFinanceData'
import CompImg from '../components/CompImg'
import Description from '../components/Description'
import {Grid } from '@material-ui/core'
import {makeStyles, MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"; 
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { useState, useEffect, useContext } from 'react';
import Axios from 'axios'
import { SettingsOutlined } from '@material-ui/icons';
import { LoginContext } from '../components/UserContext'
import Chat from '../components/Chat'
import { TextField, Button } from '@material-ui/core'


const theme = createMuiTheme({
    palette: {
        background: {
            default: "#FFFFFA"
        }
    }
})


const styles = makeStyles({
    accordion: {
        width: "50%",
    },
    data: {
        marginBottom: "30%"
    },
    divider: {
        marginBottom: "2%",
        marginTop: "0.5%"
    },
    title: {
        marginTop: "0.5%",
        textAlign: "left"
    },
    logo: {
        marginTop: "0.5%",
        marginRight: "1%"
    }
})

const ResultPage = () => {
    const history = useHistory()
    const value = history.location.state
    const searchValue = value.toUpperCase()
    const { loggedIn, setLoggedIn } = useContext(LoginContext) 
    const classes = styles()
    const [link, setLink] = useState('')
    const [content, setContent] = useState('')
    const [username, setUsername] = useState('')
    const [comments, setComments] = useState([])
    var links = []; 
    var mapReturn;
    const commentSection = []

    useEffect(() => {
        if (searchValue.length > 0) {
            console.log('SEARCHVALUE ' + searchValue)
            console.log('checking comments')
            Axios.get('http://localhost:3002/comment_sections/' + searchValue)
            .then((res) => {
                const data = res.data
                //console.log(data)
                commentSection.push(data)
               
                setComments(data)
            })
            mapReturn = comments.map((data) => <p>{data}</p>)
        }
    },[])


    const postComment = () => {
        Axios.post("http://localhost:3002/add_comment", {
            stock_name: searchValue,
            username: username,
            content:  content
        })
        .then((res) => {
            console.log(res)
        })
    }

    return(
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container spacing={2} justify="center">
                <Grid className={classes.title} item xs={11} md={6} lg={5}>
                    <Typography variant="h3" className={classes.title}><CompImg/>{searchValue}</Typography>
                </Grid>
                <Grid item className={classes.title} xs={11} md={6} lg={5}>
                </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid container spacing={2} justify="center" >
                <Grid item xs={11} md={6} lg={5}>
                    <GetData className={classes.accordion}/>
                    <TextField onChange={(e) => {setContent(e.target.value)}} label="content"/>
                    <TextField onChange={(e) => {setUsername(e.target.value)}} label="username"/>
                    <Button onClick={postComment}>post</Button>
                    {comments ? 
                        Object.keys(comments).map((key) => {
                            return(
                                <div>
                                    <p>{comments[key].content}</p>
                                </div>
                            )
                        })
                        : <p>no comments</p>
                    }
                </Grid>
                <Grid item xs={11} md={6} lg={5}>
                    <GetNews/>
                    <GetFinanceData/>
                </Grid>
            </Grid>
            <Grid spacing={2} justify="left">
                {/* <Grid item xs={12} md={6} lg={5} position="relative">
                    <GetFinanceData/>
                </Grid> */}
            </Grid>
            <div>
            </div>
        </MuiThemeProvider>
    )
}

export default ResultPage