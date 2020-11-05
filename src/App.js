import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Content from './components/content'
import Login from './components/login'
import Register from './components/register'

const App = (props) => {
  let [user, setUser] = useState(null)

  useEffect(() => {
    decodeToken(null)
  }, [])

  const updateUser = (newToken) => {
    if(newToken){
      //Store the token into local
      localStorage.setItem('userToken', newToken)
      //Decode
      decodeToken(newToken)
    } else {
      setUser(null)
    }
  }

  const decodeToken = (existingToken) => {
    let token = existingToken || localStorage.getItem('userToken')
    //in the event we have a token
    if(token){
      //Perform decode
      let decoded = jwtDecode(token)
      // In the event of an expired token
      if(!decoded || (Date.now() > decoded.exp * 1000)){
        // User is set to null.
        setUser(null)
      } else {
        // User is set to decoded.
        setUser(decoded)
      }
    } else {
      // No token, no user.
      setUser(null)
    }
  }

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('userToken')
    updateUser(null)
  }
  if(!user){
    return (
      <Router>
        <div className="app">
          <main>
            <Content user={user} updateUser={updateUser}/>
          </main>
          <hr/>
          <Login updateUser={updateUser}/>
          <Register updateUser={updateUser}/>
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <div className="app">
          <main>
            <Content user={user} updateUser={updateUser}/>
          </main>
          <hr/>
          <p>Hey, {user.name}! Thanks for logging in :D</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </Router>
    )
  }

}

export default App;
