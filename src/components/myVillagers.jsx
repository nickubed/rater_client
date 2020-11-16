import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import DisplayGrid from './displayGrid'

const MyVillagers = (props) => {
    let [grid, setGrid] = useState({
        F: [],
        D: [],
        C: [],
        B: [],
        A: [],
        S: []
    })
    let [postEdit, setPostEdit] = useState(false)
    
    useEffect(() => {
        console.log(postEdit)
        setPostEdit(false)
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
    }, [postEdit, grid, props.user])

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