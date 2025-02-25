import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/usuario");
  }
  return (
    <div>
      Componente principal
      <button onClick={handleClick}>
      link a otra pagina
      </button>
    </div>
  )
}
