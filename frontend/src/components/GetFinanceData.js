import { EmojiObjectsRounded } from '@material-ui/icons'
import Axios from 'axios'
import { useState } from 'react'

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

    /// if finance data exists, return finance data, otherwise return loading animation ///
    if (financeData){
        //console.log(financeData)
        return(
            <div>
                <p>Asset Growth: {financeData["assetGrowth"]}</p>
                <p>Debt Growth: {financeData["debtGrowth"]}</p>
                <p>Divident Per Share Growth: {financeData["dividendsperShareGrowth"]}</p>
                <p>EPS Growth: {financeData["epsgrowth"]}</p>
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
