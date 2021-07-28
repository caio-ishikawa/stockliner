import GetData from '../util/GetData'
import GetNews from '../util/GetNews'
import GetFinanceData from '../components/GetFinanceData'
import CompImg from '../components/CompImg'
import {Grid } from '@material-ui/core'
import {makeStyles, MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"; 
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { SettingsOutlined } from '@material-ui/icons';


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
    const classes = styles()
    const [link, setLink] = useState('')
    var links = []; 

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
                    <GetFinanceData/>
                </Grid>
                <Grid item xs={11} md={6} lg={5}>
                    <GetNews/>
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