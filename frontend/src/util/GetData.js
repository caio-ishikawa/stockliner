import Axios from 'axios';
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles"; 
import ApexCharts from 'apexcharts'
import ReactApexChart from 'apexcharts'

const styles = makeStyles({
    container:{
        backgroundColor: "white",
        padding: "2%"
    }
})

const GetData = () => {
    ///const apiKey = 'DWK7LDWIV19Q5J86';
    const value = 'IBM';
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + value + '&apikey=' + 'demo'
    const closeList = []
    const dateList = []
    const [closePrice, setClosePrice] = useState()
    const [dates, setDates] = useState()
    const classes = styles()

    /// gets close price and pushses to const closeList ///
    const getPrices = async () => {
        await Axios.get(apiUrl)
        .then((res) => {
            const timeSeries = res.data["Time Series (Daily)"]
            Object.keys(timeSeries).forEach((key) => {
                const list = timeSeries[key.toString()]
                const list2 = list["4. close"]
                closeList.push(list2)
                localStorage.setItem('closeList2', JSON.stringify(list2))
            })
            const dates = Object.keys(timeSeries)
            dateList.push(dates)
            localStorage.setItem('dateList2', JSON.stringify(dates))
        })
        setClosePrice(closeList.reverse())
        setDates(dateList[0].reverse())
    }

    if (closePrice){
        if (dates){

            const data = {
                labels: dates,
                datasets: [{
                    label: "IBM",
                    data: closePrice,
                    fill: false,
                    background: '#4D9DE0',
                    backgroundColor: "#26C485",
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
                    <Card className={classes.container}>
                        <Line data={data} options={options} height={350} />
                    </Card>
                </div>
            )
        }else{
            return(
                <div>
                    <p>loading dates</p>
                </div>
            )
        }
    } else{
        getPrices()
        return(
            <div>
                <p>Loading closing price</p>
            </div>
        )
    }
        
    // console.log(closeList)
    // console.log(dateList)
}


export default GetData;
