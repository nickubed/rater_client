import React from 'react'
import ChoiceBar from './choiceBar'

const CardDisplay = (props) => {
    let color = props.villager['bubble-color']
    let divStyle = {
        backgroundColor: color
    }

    return (
        <div>
            <p>{props.villager['name']['name-USen']}</p>
            <div style={divStyle}>
                <img style={{maxWidth: '90%', maxHeight: '90%'}}src={props.villager['image_uri']} alt='Villager'/>
            </div>
            <div style={divStyle}>
                <ChoiceBar villager={props.villager} addVillager={props.addVillager}/>
            </div>
        </div>
    )
}

export default CardDisplay