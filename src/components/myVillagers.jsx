import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import DisplayGrid from './displayGrid'

const MyVillagers = (props) => {
    let [grid, setGrid] = useState([])
    let [postEdit, setPostEdit] = useState(false)
    
    useEffect(() => {
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
            <DisplayGrid grid={grid} user={props.user} setPostEdit={setPostEdit} edit={true}/>
        </div>
    )
}

export default MyVillagers