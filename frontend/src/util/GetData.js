import Axios from 'axios';
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'

const GetData = () => {
    const apiKey = 'DWK7LDWIV19Q5J86';
    const value = 'IBM';
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + value + '&apikey=' + 'demo'
    const closeList = []
    const dateList = []
    const [closePrice, setClosePrice] = useState()
    const [dates, setDates] = useState()

    /// gets close price and pushses to const closeList ///
    const getPrices = async () => {
        await Axios.get(apiUrl)
        .then((res) => {
            const timeSeries = res.data["Time Series (Daily)"]
            console.log(timeSeries)
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
        setDates(dateList)
    }

    if (closePrice){
        if (dates){
            const data = {
                labels: dates[0].reverse(),
                datasets: [
                    {
                        label: "IBM",
                        data: closePrice,
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                    }
                ]
            };
            const options = {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false
                            }
                        }
                    ]
                },
                maintainAspectRatio: false
            };
            console.log(dates)
            console.log(closePrice)
            return(
                <div>
                    <Card>
                        <Line data={data} options={options} height={350}/>
                    </Card>
                    <p>there's data</p>
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
