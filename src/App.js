import React, {useEffect, useState} from 'react'
import CardDisplay from './components/cardDisplay'
const API_URL = 'http://acnhapi.com/v1/villagers/'
const DB_URL = 'http://localhost:3000'

const App = (props) => {
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
  const makeCurrent = (data) => {
    console.log(data)
    setCurrent(data.hits.shift())
    setData(data)
    setHasData(true)
  }
// Sets us all up, dismiss welcome message and make current carry data to satisfy conditional render
  const handleClick = (e) => {
    console.log(DB_URL)
    makeCurrent(data)
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
      body: JSON.stringify({userChoice: userChoice, user: 1}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response)
    })
  }

  if(hasData){
    console.log(current)
    return (
      <div>
        <div>
          <CardDisplay villager={current} addVillager={addVillager} />
        </div>
        <button onClick={submitChoice}>Submit!</button>
      </div>
    );
  }
  else{
    return(
      <div>
        <h1>Welcome!</h1>
        <button onClick={handleClick}>Hello</button>
      </div>
    )
  }
}

export default App;
