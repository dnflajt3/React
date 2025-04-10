import { useState } from 'react';
import './App.css';
import Board from './Board';


export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board></Board>
    </div>
  );
}