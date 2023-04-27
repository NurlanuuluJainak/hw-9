
import styled from 'styled-components'
export const Input = (props) => {
    return(
        <div>
            <Lable className="lable" htmlFor={props.id}>
                {props.children}
            </Lable>
            <Inputs 
            type={props.type}
            placeholder={props.placeholder}
            className="input"
            value={props.value}
            onChange={props.onChange}
             />
        </div>
    )
}

const Inputs = styled.input`
   width: 340px;
    height: 39px;
    border-radius: 8px;
    border-color: #ad9be9;
`

const Lable = styled.label`
    font-size: large;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    margin-left: 1rem;
`