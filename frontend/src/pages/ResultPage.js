import GetData from '../util/GetData'
import GetNews from '../util/GetNews'
import GetFinanceData from '../components/GetFinanceData'
import {Toolbar, Typography, Container, Grid } from '@material-ui/core'
import Axios from 'axios'

const ResultPage = () => {
    return(
        <div>
            <p>results page</p>
            <button onClick={GetData}>get data</button>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} md={6} lg={5}>
                    <GetData/>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <GetNews/>
                </Grid>
            </Grid>
            <Grid spacing={2} justify="left">
                <Grid item xs={12} md={6} lg={5} position="relative">
                    <GetFinanceData/>
                </Grid>
            </Grid>
            <div>
            </div>
        </div>
    )
}

export default ResultPage