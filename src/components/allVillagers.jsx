import React, {useEffect} from 'react'
import DisplayGrid from './displayGrid'

const AllVillagers = (props) => {
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
            let result = await fetch(`${process.env.REACT_APP_DB_URL}/villager/allVillagers`)
            .then(response => response.json())
            result.forEach((villager) => {
                villager.v['usersVillagers'] = {'grade': villager.average}
                grid[villager.average].push(villager.v)
            })
        }
        performFetch()
        }
    })

    return(
        <div>
            <DisplayGrid grid={grid} user={props.user} edit={false} />
        </div>
    )
}

export default AllVillagers