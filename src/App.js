import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpenses/NewExpenses';
import { Header } from './components/Header/header';
import { Users } from './components/users/Users';
import { Login } from './components/login/Login';
const producDate = [
  {
    title:"Alma",
    price:120,
    date: new Date(2021,6,19),
    id:'1'
  },
  {
    title:"Banan",
    price:220,
    date:new Date(2022, 6 , 26),
    id:"2"
  },
  {
    title:"Sok",
    price:2000,
    date:new Date(2021,5,14),
    id:"3"
  },
  {
    title:"car",
    price:1420,
    date:new Date(2020,4,23),
    id:"4"
  },
]


function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [user, setUser] = useState(false);

  function getLogin() {
    setIsloggedIn(true);
    localStorage.setItem("Login", !isloggedIn);
  }

  function closeLogin() {
    setIsloggedIn((prev) => !prev);
    localStorage.removeItem("Login");
  }
  useEffect(() => {
    const getLocal = localStorage.getItem("Login");
    setIsloggedIn(getLocal);
  }, []);


  function ExpensHandler() {
    setUser((prev) => !prev);
    localStorage.removeItem("Users");
  }
  // !
  function UserMaps() {
    setUser(true);
    localStorage.setItem("Users", !user);
  }
  useEffect(() => {
    const getUser = localStorage.getItem("Users");
    setUser(getUser);
  }, []);


  const [newProduc,setNewProduc] = useState(producDate)

  const addNewExpensesHandler = (data) => {
 setNewProduc((prev) => {
  return [
    data,
    ...prev,
  ]
 })
  }


  return (
    <div className="App">
    <Header
      onLogin={getLogin}
      closeLogin={closeLogin}
      UserMaps={UserMaps}
      isloggedIn={isloggedIn}
      expensHandler={ExpensHandler}
    />
    {isloggedIn ? (
      <>
        {user ? (
          <Users closeLogin={closeLogin} />
        ) : (
          <div>
            <NewExpense onSubmit={addNewExpensesHandler} />
            <Expenses data={newProduc} />
          </div>
        )}
      </>
    ) : (
      <Login getLogin={getLogin} />
    )}
  </div>
    

  );
}

export default App;
