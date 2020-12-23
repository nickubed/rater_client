import React, {useState, useEffect} from 'react'
import '../static/griddle.css'
import { Redirect } from 'react-router-dom'
import DisplayCell from './displayCell'
import ShowGrid from './showGrid'

// Don't judge me on this atrocious component, please. Needs refactor.
const DisplayGrid = (props) => {
    let [viewGrid, setViewGrid] = useState(['S', 'A', 'B', 'C', 'D', 'F'])
    let [cell, setCell] = useState()
    let [tabHead, setTabHead] = useState()

    useEffect(() => {
        let head = viewGrid.map(grade => {
            return <tr>
                    <td>{grade}</td>
                    {props.grid.forEach(villager => {
                        if(villager.usersVillagers.grade === grade){
                            console.log('hitting')
                            return <DisplayCell villager={villager} />
                        }
                    })}
                </tr>
        })
        setTabHead(head)
    }, [props.grid])



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
            <table>
                <thead>
                    {tabHead}
                </thead>
            </table>
            {cell}
        </div>
    )
}

export default DisplayGrid