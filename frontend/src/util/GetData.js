import Axios from 'axios';
import { Line } from 'react-chartjs-2'

const GetData = async () => {
    const apiKey = 'DWK7LDWIV19Q5J86';
    const value = 'IBM';
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + value + '&apikey=' + 'demo'
    const closeList = []
    const dateList = []

    /// gets close price and pushses to const closeList ///
    Axios.get(apiUrl)
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
        
    // console.log(closeList)
    // console.log(dateList)
}


export default GetData;
