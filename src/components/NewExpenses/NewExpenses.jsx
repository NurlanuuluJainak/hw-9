import { useState } from "react"
import { ExpenseForm } from "../ExpenseForm/ExpenseForm"
import Button from "../UI/Button/Button"

import styled  from "styled-components"

export const NewExpense = ({onSubmit}) => {
    const [showForm,setshowForm] = useState(false)

    function openAndCloseExpensesFormHandler(){
        setshowForm(prev => !prev)
    }
    return(
        <Card>
            {
                showForm ? (<ExpenseForm onClick={openAndCloseExpensesFormHandler}
                onSubmit={onSubmit}
                />) : 
          ( <Button onClick={openAndCloseExpensesFormHandler}>Добавить новый расход</Button>)
            }

        </Card>
    )
}

const Card = styled.div`
        padding: 30px ;
    width:100%;
    max-width: 1100px ;
    margin: 0 auto;
    border-radius:8px ;
    margin-top: 50px;
    background-color: #AD9BE9;

`