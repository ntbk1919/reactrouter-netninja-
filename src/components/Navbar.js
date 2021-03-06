import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'
const Navbar=(props)=>{
    setTimeout(()=>{
        props.history.push('/about')
    },30000)
    return (
    <nav className="nav-wrapper red darken-3">
    <div className="container">
        <a className="brand-logic">Poke'Times</a>
        <ul className="right">
            <li> <Link to ="/">Home</Link></li>
            <li><NavLink to ="/about"activeStyle={{color:'green'}}>About</NavLink></li>
            <li><NavLink to ="/contact"activeStyle={{color:'green'}}>Contact</NavLink></li>
        </ul>
    </div>
    </nav>
    )
}
export default withRouter( Navbar);