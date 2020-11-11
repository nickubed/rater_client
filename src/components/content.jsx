import React from 'react'
import { Route } from 'react-router-dom'
import '../static/main.css'
import Register from './register'
import Login from './login'
import Selector from './selector'
import DisplayGrid from './displayGrid'

const Content = (props) => {
    return(
    <div>
        <Route exact path="/" render={
            ()=> <Register updateUser={props.updateUser} />
        } />
        <Route path="/login" render={
            ()=> <Login user={props.user} updateUser={props.updateUser} />
        } />
        <Route path="/selector" render={
            ()=> <Selector user={props.user} />
        } />
        <Route path="/myVillagers" render={
            ()=> <DisplayGrid user={props.user} />
        } />
    </div>
    )
    
}

export default Content