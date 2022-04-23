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
                <img src='/images/logo.png' alt='Clinic' width='112' height='28' />
            </Link>
            <button onClick={ handleLogout }> Logout </button>
        </div>
        
    </div>
  )
}
