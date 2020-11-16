import React, {useState} from 'react'

const SelectGrade = (props) => {
    let [btnText, setBtnText] = useState('Edit')
    let [newGrade, setNewGrade] = useState(props.grade)

    const handleSelect = (grade) => {
        setNewGrade(grade)
        props.submitEdit(grade, props.villager.id)
    }

    const showSelect = () => {
        if(props.toggle === null){
            return(
                props.setToggle(
                <div>
                    <select onChange={(e) => handleSelect(e.currentTarget.value)}>
                        <option value='S'>S</option>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <option value='C'>C</option>
                        <option value='D'>D</option>
                        <option value='F'>F</option>
                    </select>
                </div>
                ),
                setBtnText('Done Editing')
            )
        } else {
            props.setToggle(null)
            setBtnText('Edit')
        }
    }

    if(props.edit){
    return(
        <div>
            <button onClick={(e) => showSelect()}>{btnText}</button>
            {props.toggle}
        </div>
    )
    } else {
        return(
            <div>
            </div>
        )
    }
}

export default SelectGrade