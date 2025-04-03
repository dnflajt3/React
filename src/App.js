import logo from './logo.svg';
import './App.css';
import MyB from './MyButton';
import { Button1, Button3 } from './ButtonLib';
import Ap from './AboutPage';
import Profile from './Profile';
import ShoppingList from './ShoppingList';


export default function App() {
  return (
    <div className='main'>
      <h1>Hello React</h1>
      <MyB></MyB><br></br>
      <Button1></Button1>&nbsp;
      <Button3></Button3>
      <Ap></Ap>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
    </div>
  );
}

