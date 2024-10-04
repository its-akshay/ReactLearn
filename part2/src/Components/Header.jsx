import { useState } from 'react';
import './Index.css'
import { Link } from 'react-router-dom';


const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <li>Cart</li>
          <Link to="/weather">
            <li>Weather</li>
          </Link>

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