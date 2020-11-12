import React, {useState} from 'react'

const DisplayVillager = (props) => {
    let [toggle, setToggle] = useState()

    const showSelect = () => {
            return(
                setToggle(
                <div>
                    <select>
                        <option>S</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>F</option>
                    </select>
                </div>
            ))
    }
    return(
        <div>
            <p>{props.villager.name}</p>
            <div>
                <img src={props.villager.img} alt={props.villager.name} />
            </div>
        <button onClick={(e)=> showSelect()}>Edit</button>
        {toggle}
        </div>
    )
}

export default DisplayVillager