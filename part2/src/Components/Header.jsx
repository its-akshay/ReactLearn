import { useState } from 'react';
import './Header.css'
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Weather</li>
        </ul>

        {
          (!isLogged) ?
            (<button onClick={() => { setIsLogged(true) }}>Login</button>) :
            (<button onClick={() => { setIsLogged(false) }}>Logout</button>)
        }
        
      </div>
    </div>
  )
}

export default Header