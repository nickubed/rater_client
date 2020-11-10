import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const DisplayGrid = (props) => {
    let [yourVillagers, setYourVillagers] = useState([])
    let [fGrid, setfGrid] = useState([])
    let f = []
    useEffect(() => {
        if(props.user){
            fetch(`${process.env.REACT_APP_DB_URL}/villager/${props.user.id}`)
            .then(response => response.json())
                .then(villagers => {
                    villagers.forEach((villager) => {
                        if(villager.usersVillagers.grade === 'F'){
                            f.push(villager)
                        }
                    })
                }
            )
        }
    })

    const handleCheck = () => {
        console.log(f)
        renderRow()
    }

    const renderRow = () => {
        return f.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}>{villager.name}</td>
        })
    }
    
    if(!props.user){
        return <Redirect to="/" />
    }

    return(
        <div>
            <table>
                <tr>
                    <th>S</th>
                    {f}
                </tr>
                <tr>
                    <th>A</th>
                </tr>
                <tr>
                    <th>B</th>
                </tr>
                <tr>
                    <th>C</th>
                </tr>
                <tr>
                    <th>D</th>
                </tr>
                <tr>
                    <th>F</th>
                </tr>
            </table>
            <button onClick={handleCheck}>Check</button>
        </div>
    )
}

export default DisplayGrid