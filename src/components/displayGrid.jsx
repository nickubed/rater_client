import React, {useState, useEffect} from 'react'
import '../static/griddle.css'
import { Redirect } from 'react-router-dom'
import DisplayCell from './displayCell'
import ShowGrid from './showGrid'

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
        console.log('hit')
        if(fGrid.length + dGrid.length + cGrid.length + bGrid.length + aGrid.length + sGrid.length !== 391){
            const renderRow = () => {
                setfGrid(props.grid['F'].map((villager, i) => {
                    return <DisplayCell submitEdit={submitEdit} setCell={setCell} villager={villager} i={i} edit={props.edit} />
                }))
                setdGrid(props.grid['D'].map((villager, i) => {
                    return <DisplayCell submitEdit={submitEdit} setCell={setCell} villager={villager} i={i} edit={props.edit} />
                }))
                setcGrid(props.grid['C'].map((villager, i) => {
                    return <DisplayCell submitEdit={submitEdit} setCell={setCell} villager={villager} i={i} edit={props.edit}/>
                }))
                setbGrid(props.grid['B'].map((villager, i) => {
                    return <DisplayCell submitEdit={submitEdit} setCell={setCell} villager={villager} i={i} edit={props.edit}/>
                }))
                setaGrid(props.grid['A'].map((villager, i) => {
                    return <DisplayCell submitEdit={submitEdit} setCell={setCell} villager={villager} i={i} edit={props.edit}/>
                }))
                setsGrid(props.grid['S'].map((villager, i) => {
                    return <DisplayCell submitEdit={submitEdit} setCell={setCell} villager={villager} i={i} edit={props.edit}/>
                }))
            }
            renderRow()
            }
        })

    if(!props.user){
        return <Redirect to="/" />
    }

    const submitEdit = (newGrade, villagerId) => {
        let data = {
            user: props.user.id,
            grade: newGrade
        }
        fetch(`${process.env.REACT_APP_DB_URL}/villager/${villagerId}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
            .then(() => {
                console.log('posted')
                props.setPostEdit(true)
            })
    }

    return(
        <div>
            <ShowGrid 
                fGrid={fGrid}
                dGrid={dGrid}
                cGrid={cGrid}
                bGrid={bGrid}
                aGrid={aGrid}
                sGrid={sGrid} 
                />
            {cell}
        </div>
    )
}

export default DisplayGrid