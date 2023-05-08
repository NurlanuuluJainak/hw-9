import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

const actionTypes = {
  CHENGE_EMAIL_VALUE: "CHENGE_EMAIL_VALUE",
  CHENGE_EMAIL_VALUEIION: "CHENGE_EMAIL_VALITION",
  CHENGE_PASSWORD_VALUE: "CHENGE_PASSWORD_VALUE",
  CHENGE_PASSWORD_VALUEIION: "CHENGE_PASSWORD_VALITION",
};
const formReduser = (state, action) => {
  console.log(action, "hello world");

  if (action.type === actionTypes.CHENGE_EMAIL_VALUE) {
    return {
      ...state,
      email: action.payload,
    };
  }

  if (action.type === actionTypes.CHENGE_EMAIL_VALUEIION) {
    return {
      ...state,
      isEmailValid: state.email.includes("@"),
    };
  }
    if (action.type === actionTypes.CHENGE_PASSWORD_VALUE) {
      return {
        ...state,
        password: action.payload,
      };
    }
  
    if (action.type === actionTypes.CHENGE_PASSWORD_VALUEIION) {
      return {
        ...state,
        isPasswordValid: state.password.trim().length > 6,
      };
    }
  };

export const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailValid, setEmailValid] = useState();

  const [formState, dispatchForm] = useReducer(formReduser, {
    email: "",
    isEmailValid: true,
    password:'',
    isPasswordValid:true
  });


  const [formValid, setFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    dispatchForm({
      type: actionTypes.CHENGE_EMAIL_VALUE,
      payload: e.target.value,
    });

    setFormValid(
      e.target.value.includes("@") && formState.password.trim().length > 6
    );
  };
  const passwordChangeHandler = (e) => {
    dispatchForm({
      type: actionTypes.CHENGE_PASSWORD_VALUE,
      payload: e.target.value,
    });

    setFormValid(
      e.target.value.trim().length > 6 && formState.email.includes("@")
    );
  };
  const validateEmailHandler = () => {
    dispatchForm({
      type: actionTypes.CHENGE_EMAIL_VALUEIION,
    });
  };
  const validatePasswordHandler = () => {
    dispatchForm({ type: actionTypes.CHENGE_PASSWORD_VALUEIION });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.getLogin(formState.email, formState.password);
  };

  return (
    <ContainerDiv>
      <MiniContainerDiv>
        <form onSubmit={submitHandler}>
          <InputControl>
            <Label htmlFor="email">E-Mail</Label>

            {formState.isEmailValid === false ? (
              <InputDiv
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                type="email"
                id="email"
              />
            ) : (
              <InputDiv
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            )}
          </InputControl>
          <InputControl>
            <Label htmlFor="password">Password</Label>
            {formState.isPasswordValid === false ? (
              <InputDiv
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                type="password"
                id="password"
              />
            ) : (
              <InputDiv
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            )}
          </InputControl>
          <Button onLogin={props.getLogin} disabled={!formValid} type="submit">
            login
          </Button>
        </form>
      </MiniContainerDiv>
    </ContainerDiv>
  );
};
const InputDiv = styled.input`
  width: 400px;
  height: 35px;
  background-color: #dad5d5;

  border: 2px solid #fff;
  border-radius: 10px;
  font: inherit;
  &:focus {
    outline: none;
    border-color: #7c1292;
    background: #e7c8ef;
  }
`;

const Label = styled.label`
  padding-right: 10px;
  font-weight: bold;
`;
const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const MiniContainerDiv = styled.div`
  width: 600px;
  height: 220px;
  border: 2px solid;
  background-color: #fff;
  border-radius: 12px;

  box-shadow: #918a8a 0px 0px 40px 0px;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputControl = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
