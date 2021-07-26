import { Line } from 'react-chartjs-2'

const PlotData = () => {
    const closeList = JSON.parse(localStorage.getItem('closeList'))
    const dateList = JSON.parse(localStorage.getItem('dateList'))
    console.log(closeList.reverse())
    console.log(dateList.reverse())

    const data = {
        labels: dateList[0].reverse(),
        datasets: [
            {
                label: "IBM",
                data: closeList,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    }
                }
            ],
        },
        maintainAspectRatio: false

    }

    return(
        <div>
            <Line data={data} options={options} height={350}/>
        </div>
    )
}

export default PlotData