import Axios from 'axios'
import { Typography } from '@material-ui/core'
import { useState } from 'react'
import {makeStyles} from "@material-ui/core/styles"; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = makeStyles({
    root: {
        fontFamily: "Roboto",
        marginTop: "1%",
        color: "#333333"
    },
    container: {
        textAlign: "left",
        marginTop: "4%",
        color: "#333333"
    },
    line: {
        borderColor: "white"
    },
    card: {
        backgroundColor: "#FDFFFC",
    }
})

const FindFinanceData = () => {
    const urlApi = 'https://financialmodelingprep.com/api/v3/financial-growth/AAPL?limit=20&apikey=055644b754df26be01f9083226a98784'
    const [financeData, setFinanceData ] = useState()

    /// get data from FMP API and return latest financial growth statistics ///
    const getData = async () => {
        Axios.get(urlApi)
            .then((res) => {
                const data = res.data
                setFinanceData(data[0])
            }
        )
    }
    const classes = styles()

    /// if finance data exists, return finance data, otherwise return loading animation ///
    if (financeData){
        //console.log(financeData)
        return(
                <div className={classes.container}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textPrimary" className={classes.root} variant="h6">Financial Growth</Typography>
                            <hr className={classes.line}></hr>
                            <Typography className={classes.root}> Asset Growth: {financeData["assetGrowth"]}</Typography>
                            <Typography className={classes.root}>Debt Growth: {financeData["debtGrowth"]}</Typography>
                            <Typography className={classes.root}>Divident Per Share Growth: {financeData["dividendsperShareGrowth"]}</Typography>
                            <Typography className={classes.root}>EPS Growth: {financeData["epsgrowth"]}</Typography>
                        </CardContent>
                    </Card>
                </div>
        )
    } else {
        getData()
        return(
            <div>
                <p>loading finance data</p>
            </div>
        )
    }
}

export default FindFinanceData;
