import React from 'react'
import { Route } from 'react-router-dom'
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
        <h1>Welcome!</h1>
    </div>
    )
    
}

export default Content