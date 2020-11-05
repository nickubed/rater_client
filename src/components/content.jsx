import React, { useEffect, useState } from 'react'
// import { Route } from 'react-router-dom'
import CardDisplay from './cardDisplay'
import Confirm from './confirm'
const API_URL = 'http://acnhapi.com/v1/villagers/'
const DB_URL = 'http://localhost:3000'

//TO DO: Refine breakpoint to open "submit" button display

const Content = (props) => {
    let [data, setData] = useState({hits: []})
    let [current, setCurrent] = useState({})
    let [hasData, setHasData] = useState(false)
    let [userChoice, setUserChoice] = useState([])

    useEffect(() => {
        document.title = 'Villager Rater'
        const getData = async() => {
            let rdata = await fetch(API_URL).then(response => response.json())
            rdata = Object.values(rdata)
            setData({hits: rdata})
        }
        getData()
    }, [])

    // sets the displayed villager to be the 0th element of the dataset, triggers hasData (needs handling for when the array is emptied)
    // Sets us all up, dismiss welcome message and make current carry data to satisfy conditional render
    const handleClick = (e) => {
        if(data.hits.length > 0){
            setCurrent(data.hits.shift())
            setData(data)
            setHasData(true)
        } else {
            setHasData(false)
        }
    }
    // This effectively creates the "schema" that will match up with the back-end. Harvests just what we need from the API
    const addVillager = (e) => {
        let newVill = {
        name: current['name']['name-USen'],
        personality: current['personality'],
        img: current['image_uri'],
        apiId: current['id'],
        grade: e.target.id
        }
        setUserChoice(userChoice.concat(newVill), handleClick())
    }

    const submitChoice = () => {
        fetch(`${DB_URL}/villager/new`, {
        method: 'POST',
        body: JSON.stringify({userChoice: userChoice, user: props.user.id}),
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(response => {
        console.log(response)
        })
    }

    
    if(hasData){
        return (
        <div>
            <div>
            <CardDisplay villager={current} addVillager={addVillager} />
            </div>
        </div>
        );
    }
    else if(data.hits.length < 1){
        return(
            <Confirm user={props.user} submitChoice={submitChoice}/>
        )
    }
    else{
        return(
        <div>
            <h1>Welcome!</h1>
            <button onClick={handleClick}>Let's Get Started!</button>
        </div>
        )
    }
}

export default Content