import { useState } from 'react';
import './App.css';
import Game from './Game';


export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Game></Game>
    </div>
  );
}