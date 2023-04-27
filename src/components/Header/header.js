import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button/Button'

export const Header = ({isLogin,on}) => {
  return (
    <HeaderContent>
    {isLogin && (
        <div>
            <Button>Expenses</Button>
            <Button>Users</Button>
            <Button>Logout</Button>
        </div>
    )}
    </HeaderContent>
  )
}

const HeaderContent = styled.div`
background-color: #AD9BE9;
padding:40px;
`