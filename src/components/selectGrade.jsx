import React, {useState} from 'react'

const SelectGrade = (props) => {
    let [btnText, setBtnText] = useState('Edit')

    const showSelect = () => {
        if(props.toggle === null){

            return(
                props.setToggle(
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