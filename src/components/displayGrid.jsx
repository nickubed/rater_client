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

    useEffect(() => {
        renderRow()
    })

    const renderRow = () => {
        setfGrid(props.grid['F'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} edit={props.edit} />
        }))
        setdGrid(props.grid['D'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} edit={props.edit} />
        }))
        setcGrid(props.grid['C'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} edit={props.edit}/>
        }))
        setbGrid(props.grid['B'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} edit={props.edit}/>
        }))
        setaGrid(props.grid['A'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} edit={props.edit}/>
        }))
        setsGrid(props.grid['S'].map((villager, i) => {
            return <DisplayCell setCell={setCell} villager={villager} i={i} edit={props.edit}/>
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
            {cell}
        </div>
    )
}

export default DisplayGrid