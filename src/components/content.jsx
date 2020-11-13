import React from 'react'
import { Route } from 'react-router-dom'
import '../static/main.css'
import Register from './register'
import Login from './login'
import Selector from './selector'
import MyVillagers from './myVillagers'
import AllVillagers from './allVillagers'

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
            ()=> <MyVillagers user={props.user} />
        } />
        <Route path="/allVillagers" render={
            ()=> <AllVillagers user={props.user} />
        } />
    </div>
    )
    
}

export default Content