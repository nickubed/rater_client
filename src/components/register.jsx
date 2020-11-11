import React, { useEffect, useState } from 'react'
// import {Redirect} from 'react-router-dom'

const Register = (props) => {
    let [email, setEmail] = useState('')
    let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    let [photo, setPhoto] = useState('')
    let [about, setAbout] = useState('')
    let [message, setMessage] = useState('')

    useEffect(() => {
        setMessage('')
    }, [name, email, password])

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            email,
            name,
            password,
            photo,
            about
        }
        fetch(`http://localhost:3000/auth/signup`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            response.json().then(result => {
                if(response.ok) {
                    props.updateUser(result.token)
                } else {
                    setMessage(`${response.status} ${response.statusText}: ${result.message}`)
                }
            })
            .catch(err => {
                console.log(err)
                setMessage('Database Error')
            })
        })
        .catch(err => {
            setMessage(`Error: ${err.toString()}`)
        })
    }

    return (
        <div>
            <h5>{message}</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={e => setName(e.currentTarget.value)} />
                    <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.currentTarget.value)} />
                    <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.currentTarget.value)} />
                </div>
                <div>
                    <input type="text" name="photo" placeholder="An Image URL" onChange={e => setPhoto(e.currentTarget.value)} />
                    <input type="textarea" name="about" placeholder="A little about you!" onChange={e => setAbout(e.currentTarget.value)} />   
                </div>
                <button type="submit">Register!</button>
            </form>
        </div>
    )
}

export default Register