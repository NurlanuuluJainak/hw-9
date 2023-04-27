import styled from "styled-components";
import { ChartBar } from "./ChartBar";

export const ExpensesChart = (props) =>{

    const months = [
        {lable: "Jan", currentPrice:0},
        {lable: "Feb", currentPrice:0},
        {lable: "Mar", currentPrice:0},
        {lable: "Apr", currentPrice:0},
        {lable: "May", currentPrice:0},
        {lable: "Jun", currentPrice:0},
        {lable: "Jul", currentPrice:0},
        {lable: "Aug", currentPrice:0},
        {lable: "Sep", currentPrice:0},
        {lable: "Oct", currentPrice:0},
        {lable: "Nov", currentPrice:0},
        {lable: "Dec", currentPrice:0},
    ]

    console.log(props.filteredExpenses, "chart")

    props.filteredExpenses.forEach((element) => {
        const findedMonthNumber = element.date.getMonth();
        months[findedMonthNumber].currentPrice += element.price
    })
    // const maxYalue = 2000;
    return (
      <Chart >
        {months.map((el) => (
            <ChartBar el={el}/>
        ))}

{/* key={dataPoint.lable}
            value={dataPoint.currentPrice}
            maxYalue={maxPrice}
                lable={dataPoint} */}
      </Chart>
    )
}

const Chart = styled.div`
    display: flex;
    background-color: cornsilk;
    max-width: 1000px;
    justify-content: space-around;
    padding: 20px 20px;
    margin: 0 auto;
    height: 17vh;
    margin-top: 10px;
    border-radius: 10px;
`