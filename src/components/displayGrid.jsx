import React, {useState, useEffect} from 'react'
import '../static/griddle.css'
import { Redirect } from 'react-router-dom'
import DisplayCell from './displayCell'

// Don't judge me on this atrocious component, please. Needs refactor.
const DisplayGrid = (props) => {
    let [fGrid, setfGrid] = useState([])
    let [dGrid, setdGrid] = useState([])
    let [cGrid, setcGrid] = useState([])
    let [bGrid, setbGrid] = useState([])
    let [aGrid, setaGrid] = useState([])
    let [sGrid, setsGrid] = useState([])
    let [cell, setCell] = useState()
    let grid = {
        F: [],
        D: [],
        C: [],
        B: [],
        A: [],
        S: []
    }
    useEffect(() => {
        if(props.user){
            const performFetch = async() => { 
            let result = await fetch(`${process.env.REACT_APP_DB_URL}/villager/${props.user.id}`)
            .then(response => response.json())
            result.forEach((villager) => {
                grid[villager.usersVillagers.grade].push(villager)
            })
        }
        performFetch()
        }
    })

    const handleCheck = () => {
        renderRow()
    }

    const renderRow = () => {
        setfGrid(grid['F'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} />
        }))
        setdGrid(grid['D'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} />
        }))
        setcGrid(grid['C'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} />
        }))
        setbGrid(grid['B'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} />
        }))
        setaGrid(grid['A'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} />
        }))
        setsGrid(grid['S'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} />
        }))
    }
    
    if(!props.user){
        return <Redirect to="/" />
    }

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>S</th>
                        {sGrid}
                    </tr>
                    <tr>
                        <th>A</th>
                        {aGrid}
                    </tr>
                    <tr>
                        <th>B</th>
                        {bGrid}
                    </tr>
                    <tr>
                        <th>C</th>
                        {cGrid}
                    </tr>
                    <tr>
                        <th>D</th>
                        {dGrid}
                    </tr>
                    <tr>
                        <th>F</th>
                        {fGrid}
                    </tr>
                </tbody>
            </table>
            <button onClick={handleCheck}>Check</button>
            {cell}
        </div>
    )
}

export default DisplayGrid