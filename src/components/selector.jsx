import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import CardDisplay from './cardDisplay'
import Confirm from './confirm'
import DisplayGrid from './displayGrid'

const Selector = (props) => {
    let [data, setData] = useState({hits: []})
    let [current, setCurrent] = useState({})
    let [hasData, setHasData] = useState(false)
    let [userChoice, setUserChoice] = useState([])

    useEffect(() => {
        document.title = 'Villager Rater'
        const getData = async() => {
            let rdata = await fetch(process.env.REACT_APP_API_URL).then(response => response.json())
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
        fetch(`${process.env.REACT_APP_DB_URL}/villager/new`, {
        method: 'POST',
        body: JSON.stringify({userChoice: userChoice, user: props.user.id}),
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(response => {
        console.log(response)
        })
    }

    if(!props.user){
        return <Redirect to="/" />
    }

    if(hasData){
        return (
        <div>
            <div>
            <CardDisplay villager={current} addVillager={addVillager} />
            </div>
        <DisplayGrid user={props.user}/>
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
                <button onClick={handleClick}>Let's Get Started!</button>
            </div>
        )
    }
}

export default Selector