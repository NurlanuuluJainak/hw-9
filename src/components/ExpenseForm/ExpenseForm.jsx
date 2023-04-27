import { useState } from 'react'
import Button from '../UI/Button/Button'
import {Input} from '../UI/Input/Input'
import styled from 'styled-components'
export const ExpenseForm = ({onClick,onSubmit}) => {
    const [inputText,setInputText] = useState("")
    const [inputNumber,setInputNumber] = useState()
    const [inputDate,setInputDate] = useState({year: null, month: null,day:null})

    function getInputValue(el){
        setInputText(el.target.value)
    }

    function getInputNumber(e){
        setInputNumber(e.target.value)
    }

    function getInputDate(e){
        console.log(e.target.value);
        let sp = e.target.value.split('-');
        let year = sp[0];
        let month = sp[1] - 1
        let day = sp[2]
        setInputDate(new Date(year, month,day))
    }
    function submitHandler(){
        const expensesProduc = {
            title: inputText,
            price: inputNumber,
            date: inputDate
        }
        onSubmit(expensesProduc)
        setInputDate("")
        setInputNumber("")
        setInputText("")
    }
    return(
        <Content >
            <Block>
            <Input type="text" placeholder="This is not...." children="Заголовок" value={inputText} onChange={getInputValue}/>
            <Input type="date"  children='Датировать'   onChange={getInputDate}/>
            </Block>
            <BlockTwo>
            <Input type="number"  children='Количество' value={inputNumber} onChange={getInputNumber}/>
            <BlockChildren>
            <Button onClick={onClick}>Отмена</Button>
            <Button onClick={submitHandler}>Добавить расходы</Button>
            </BlockChildren>
            </BlockTwo>

        </Content>
    )
}

const Content = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
`
const Block = styled.div`
 display: flex;
flex-direction: column;
gap: 50px;
`
const BlockTwo = styled.div`
    display: flex;
flex-direction: column;
gap: 50px;
`
const BlockChildren = styled.div`
     padding-left: 180px;
    display: flex;
    gap: 50px;
`