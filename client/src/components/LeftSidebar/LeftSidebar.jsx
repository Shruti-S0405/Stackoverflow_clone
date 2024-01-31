import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import user from '../../assets/user.svg'
import tags from '../../assets/tags.svg'
import home from '../../assets/home.svg'
import save from '../../assets/save.svg'
const LeftSidebar = () => {
    
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <img src={home} alt="home" width={18} />
                <p style={{paddingLeft:'10px'}}>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div> <p> Public</p></div>
                <NavLink to='/Questions' className='side-nav-links'>
                    <img src={Globe}alt="Globe" width={18}/>
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>

                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' >
                    <img src={tags}alt="Globe" width={18}/>
                    <p style={{paddingLeft:'10px'}}>Tags</p>
                </NavLink>

                <NavLink to='/Saved' className='side-nav-links' activeClassName='active' >
                    <img src={save}alt="save" width={14}/>
                    <p style={{paddingLeft:'10px'}}>  Saved</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClassName='active' >
                    <img src={user}alt="Globe" width={18}/>
                    <p style={{paddingLeft:'10px'}}>Users</p>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar
