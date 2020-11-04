import React, {useEffect, useState} from 'react'
// import {Redirect} from 'react-router-dom'


const Login = (props) => {
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    let [password, setPassword] = useState('')

    useEffect(() => {
        setMessage('')
    }, [email, password])

    //Login submittal handler
    const handleSubmit = (e) => {
        e.preventDefault()
        //Fetch it up
        fetch(`${process.env.REACT_APP_DB_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            response.json()
            .then(result => {
                if(response.ok){
                    //update user's token
                    props.updateUser(result.token)
                } else {
                    //Print out the response message
                    setMessage(`${response.status} ${response.statusText}: ${result.message}`)
                }
            })
        })
        .catch(err => {
            // Classic catch
            console.log(err)
            setMessage(`${err.toString()}`)
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" autoFocus onChange={(e) => {setEmail(e.currentTarget.value)}} />
                <h5>{message}</h5>
                <input type="password" name="password" onChange={(e) => {setPassword(e.currentTarget.value)}} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login