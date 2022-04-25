import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {

  const navigate = useNavigate();

  const handleLogout = (e) => {
    //localStorage.removeItem("jwt");
    //window.location.reload();
    navigate("/login",{
      replace: true
      });
  }

  return (
    <div className='navbar is-primary'>
        <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
                <img src="https://uploads-ssl.webflow.com/57c994f2120db7d91b49829c/5c8a61f735905d9edc64bf43_Dentalink%20Blanco-Logo.png" alt='Clinic' width='112' height='28' />
            </Link>
            <button onClick={ handleLogout } className="btn btn-dark "> Logout </button>
        </div>
        
    </div>
  )
}
