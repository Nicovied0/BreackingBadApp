import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    
    <div>
      <h1>Bienvenido a la App</h1>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
    </div>
    
  )
}

export default Landing