import './ChartBar.css'

import styled from 'styled-components'
export const ChartBar  = (props) => {
    console.log(props.el.currentPrice   )
    const maxPriceForMonth = 2000;
    const percent = Math.round((props.el.currentPrice * 100) / maxPriceForMonth);
    console.log(percent,"prassent")
    return(
        <ChartBars >
            <div className='chart-bar'>
                <ChartBarInner>
                    <ChartBarFill 
                    style={{height : percent }}
                    >
                    </ChartBarFill>
                </ChartBarInner>
                <ChartBarLable >{props.lable}</ChartBarLable>
            </div>
         {props.el.lable}
        </ChartBars>
    )
}

const ChartBars = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChartBarInner = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const ChartBarFill = styled.div`
    background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
    width: 16px;
`

const ChartBarLable = styled.div`

`