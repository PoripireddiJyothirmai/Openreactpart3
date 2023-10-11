import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
   const LinkStyles = ({isActive}) => {
return{
    textDecoration : isActive ? 'none' : 'underline',
    fontWeight : isActive ? 'bold' : 'normal'
}
   } 
    return (
        <div>
            <nav className='primary-nav'>
                <NavLink to="/" style={LinkStyles}>Home   </NavLink>
                <NavLink to="/CoursePage" style={LinkStyles}>CoursePage        </NavLink>
                <NavLink to="/ClassworkPage" style={LinkStyles}>ClassworkPage        </NavLink>
            </nav>
        </div>
    )
}