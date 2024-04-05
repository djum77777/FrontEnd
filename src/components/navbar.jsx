import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <div style={{background: 'grey', padding: 10, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className='nav-left'>
          {/* contoh pake NavLink
              Link dan NavLink sebenarnya sama cm di nav link ada atribut active yg bs membuat kt tau skg link kt aktif di hlmn mana*/}
          <NavLink className="nav-name" to="/">Home</NavLink>
          <NavLink className="nav-name" to="/contact">Contact</NavLink>
          <NavLink className="nav-name" to="/upload">Upload</NavLink>
          <NavLink className="nav-name" to="/data">Data</NavLink>
          <NavLink className="nav-name" to="/product">Product</NavLink>
          <NavLink className="nav-name" to="/about">About</NavLink>
        </div>
        
        <div className='nav-mid'>
        <p>{props.title}</p>
        </div>
        
        <div className='nav-right'>
          <p>{props.isLogin ? 'Anda sedang login' : 'Anda belum login'}</p>
          {!props.isLogin ? 
            <button onClick={props.handleLogin}>Login</button>
              :
            <button onClick={props.handleLogout}>Logout</button>  
            }

        </div>
    </div>
  )
}

export default Navbar