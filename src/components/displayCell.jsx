import React from 'react'
import DisplayVillager from './displayVillager'

const DisplayCell = (props) => {
    const handleClick = () => {
        props.setCell(null)
        return(
            props.setCell(<DisplayVillager user={props.user} submitEdit={props.submitEdit} villager={props.villager} edit={props.edit} />)
        )
    }
    return(
        <td key={props.i}>
            <img className="villagerPic"
                src={props.villager.img}
                alt={props.villager.name}
                onClick={(e) => handleClick()}/>
        </td>
    )
}

export default DisplayCell