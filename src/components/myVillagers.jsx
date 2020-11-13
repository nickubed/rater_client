import React, {useEffect} from 'react'
import DisplayGrid from './displayGrid'

const MyVillagers = (props) => {
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

    return(
        <div>
            <DisplayGrid grid={grid} user={props.user} edit={true}/>
        </div>
    )
}

export default MyVillagers