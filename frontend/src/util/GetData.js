import Axios from 'axios';
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles"; 
import ApexCharts from 'apexcharts'
import ReactApexChart from 'apexcharts'
import { useHistory } from "react-router-dom";

const styles = makeStyles({
    container:{
        backgroundColor: "#FFFFFA",
        padding: "2%"
    }
})

const GetData = () => {
    console.log('getData running')
    const history = useHistory()
    const searchValue = history.location.state
    const apiKey = 'DWK7LDWIV19Q5J86';
    const value = 'IBM' 
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + searchValue + '&apikey=' + apiKey
    const closeList = []
    const dateList = []
    const [closePrice, setClosePrice] = useState()
    const [dates, setDates] = useState()
    const [ran, setRan] = useState(false)
    const classes = styles()


    /// gets close price and pushses to const closeList ///
    useEffect(() => {
        console.log('get prices running')
        Axios.get(apiUrl)
        .then((res) => {
            const timeSeries = res.data["Time Series (Daily)"]
            if (timeSeries != null ) {
                Object.keys(timeSeries).forEach((key) => {
                    const list = timeSeries[key.toString()]
                    const list2 = list["4. close"]
                    closeList.push(list2)
                })
                const dates = Object.keys(timeSeries)
                dateList.push(dates)
            }
            setClosePrice(closeList.reverse())
            setDates(dateList[0].reverse())
            setRan(true)
        })
    }, [])

    const data = {
                labels: dates,
                datasets: [{
                    label: searchValue.toUpperCase(),
                    data: closePrice,
                    fill: true,
                    background: '#4D9DE0',
                    backgroundColor: "rgba(38, 196, 133, 0.7)",
                    borderColor: '#26C485'
                }]
            }
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        },
        maintainAspectRatio: false
    }

    return(
        <div>
            <Card className={classes.container} elevation={6}>
                <Line data={data} options={options} height={350}/>
            </Card>
        </div>
    )
}


export default GetData;
