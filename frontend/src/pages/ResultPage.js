import GetData from '../util/GetData'
import GetNews from '../util/GetNews'
import GetFinanceData from '../components/GetFinanceData'
import {Grid } from '@material-ui/core'
import {makeStyles, MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"; 
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#F1F1F1"
        }
    }
})


const styles = makeStyles({
    accordion: {
        width: "50%",
    },
    data: {
        marginBottom: "30%"
    }
})

const ResultPage = () => {
    const classes = styles()
    return(
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <p>results page</p>
            <Grid container spacing={2} justify="center" >
                <Grid item xs={12} md={6} lg={5}>
                    <GetData className={classes.accordion}/>
                    <GetFinanceData/>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
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