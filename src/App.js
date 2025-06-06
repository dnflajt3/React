
import './App.css';
import MyB from './MyButton';
import { Button1, Button3 } from './ButtonLib';
import Ap from './AboutPage';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import CountState from './CountState';
import { useState } from 'react';

function CountState2({count,onClick}){
  return (
    <div>
      <button onClick={onClick}>
        clicked {count} times
      </button>
    </div>
  )
}

export default function App() {
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div className='wrapper'>
      <h1>Welcome to my app</h1>
      <div>
          <p>Hello React</p>
          <MyB/><br></br>
          <Button1/>&nbsp;
          <Button3/>
          <Ap/>
          <Profile/>
          <ShoppingList/>
      </div>
      <div>
        <p>Hello State</p>
        <CountState/>
        <CountState/>
      </div>
      <div>
        <p>Sharing data between components</p>
        <CountState2 count={count} onClick={handleClick}/>
      </div>
    </div>
  );
}

