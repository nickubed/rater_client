import React from 'react'
import DisplayVillager from './displayVillager'

const DisplayCell = (props) => {
    const handleClick = () => {
        props.setCell(null)
        return(
            props.setCell(<DisplayVillager villager={props.villager} />)
        )
    }
    return(
        <td key={props.i}><img className="villagerPic" src={props.villager.img} alt={props.villager.name} onClick={(e) => handleClick()}/>
        </td>
    )
}

export default DisplayCell