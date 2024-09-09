import React, { useState } from 'react';
import './RockPaperScissors.css';

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['piedra', 'papel', 'tijera'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerSelection);
    determineWinner(choice, computerSelection);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Empate');
    } else if (
      (user === 'piedra' && computer === 'tijera') ||
      (user === 'papel' && computer === 'piedra') ||
      (user === 'tijera' && computer === 'papel')
    ) {
      setResult('Ganaste!');
    } else {
      setResult('Perdiste');
    }
  };

  return (
    <div className="container">
      <h1>Piedra, Papel o Tijera</h1>
      <div className="buttons">
        <button onClick={() => handleUserChoice('piedra')}>Piedra</button>
        <button onClick={() => handleUserChoice('papel')}>Papel</button>
        <button onClick={() => handleUserChoice('tijera')}>Tijera</button>
      </div>
      <div className="results">
        <p>Tu elección: <strong>{userChoice}</strong></p>
        <p>Elección del computador: <strong>{computerChoice}</strong></p>
        <p className="result">{result}</p>
      </div>
    </div>
  );
}

export default RockPaperScissors;
