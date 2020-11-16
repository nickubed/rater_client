import React, {useState} from 'react'
import SelectGrade from './selectGrade'

const DisplayVillager = (props) => {
    let [toggle, setToggle] = useState()
    let [grade, setGrade] = useState(props.villager.usersVillagers.grade)

    
    
    return(
        <div>
            <p>{props.villager.name}</p>
            <div>
                <img src={props.villager.img} alt={props.villager.name} />
            </div>
            {grade}
            <SelectGrade 
                villager={props.villager}
                setGrade={setGrade}
                toggle={toggle}
                setToggle={setToggle}
                submitEdit={props.submitEdit}
                edit={props.edit} />
        </div>
    )
}

export default DisplayVillager