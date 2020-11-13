import React from 'react'
import '../static/nav.css'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('userToken')
        props.updateUser(null)
    }
    let links = (
        <nav>
            <ul>
                <Link to="/"><li><h3>Login</h3></li></Link>
                <Link to="/register"><li><h3>Register</h3></li></Link>
            </ul>
        </nav>
    )
    if(props.user){
        links = (
            <nav style={{display: 'inline-block'}}>
                <ul>
                    <Link to="/selector"><li><h3>Start Rating!</h3></li></Link>
                    <li><h3>My Profile</h3></li>
                    <Link to="/myVillagers"><li><h3>My Villager Rankings</h3></li></Link>
                    <Link to="/allVillagers"><li><h3>Global Villager Rankings</h3></li></Link>
                    <li><h3 onClick={handleLogout}>Logout</h3></li>
                </ul>
            </nav>
        )
    }
    return(
        <div>
            {links}
        </div>
    )
}

export default Nav