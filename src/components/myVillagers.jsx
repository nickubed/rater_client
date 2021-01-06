import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../static/griddle.css'
import DisplayCell from './displayCell'

const MyVillagers = (props) => {
    let [grid, setGrid] = useState([])
    let [cell, setCell] = useState()
    let [postEdit, setPostEdit] = useState(false)
    
    useEffect(() => {
        // You ever spend a month writing a stupid, convoluted solution to a simple problem and just wind up scrapping it completely and writing normal code?
        // lol yeah neither have i
        const performFetch = async() => { 
            let result = await fetch(`${process.env.REACT_APP_DB_URL}/villager/${props.user.id}`)
            .then(response => response.json())
            result.forEach((villager) => {
                setGrid(grid => [...grid, villager])
            })
        }
        performFetch()
    }, [props.user])
    
    if(!props.user){
        return(
            <Redirect to="/" />
        )
    }

    return(
        <div>
            <table>
                <thead>
                    {/* {tabHead} */}
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'S' ? <DisplayCell villager={villager} setCell={setCell} />: null)}
                    </tr>
                    <tr>
                        <td>A</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'A' ? <DisplayCell villager={villager} setCell={setCell} /> : null)}
                    </tr>
                    <tr>
                        <td>B</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'B' ? <DisplayCell villager={villager} setCell={setCell} /> : null)}
                    </tr>
                    <tr>
                        <td>C</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'C' ? <DisplayCell villager={villager} setCell={setCell} /> : null)}
                    </tr>
                    <tr>
                        <td>D</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'D' ? <DisplayCell villager={villager} setCell={setCell} /> : null)}
                    </tr>
                    <tr>
                        <td>F</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'F' ? <DisplayCell villager={villager} setCell={setCell} /> : null)}
                    </tr>
                </tbody>
            </table>
            {cell}
        </div>
    )
}

export default MyVillagers