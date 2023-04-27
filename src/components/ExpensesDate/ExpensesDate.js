import styled from "styled-components";
export const ExpensesDate = (props) => {
    const month = props.date?.toLocaleString("en-US", {month: 'long'});
    const day = props.date?.toLocaleString("en-US",{day: "2-digit"});
    const year = props.date?.getFullYear();
    return(
        <div className="expense-date">
           <ExpensesDateMonth >{month}</ExpensesDateMonth>
           <ExpensesDateYear >{year}</ExpensesDateYear>
           <ExpensesDateDay>{day}</ExpensesDateDay>
        </div>
    )
}

const ExpensesDateMonth = styled.div`
  font-size: 16px;
    font-weight: bold;
`

const ExpensesDateYear = styled.div`
    font-size: 14px;

`

const ExpensesDateDay = styled.div`
   font-weight: bold;
    font-size: 20px;
`