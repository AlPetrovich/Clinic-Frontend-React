import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='navbar is-primary'>
        <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
                <img src='/images/logo.png' alt='Clinic' width='112' height='28' />
            </Link>
        </div>
    </div>
  )
}
