import React from 'react'

const ChoiceBar = (props) => {
    return(
        <div>
            <button id="S" className="choiceButt" onClick={props.addVillager}>S</button>
            <button id="A" className="choiceButt" onClick={props.addVillager}>A</button>
            <button id="B" className="choiceButt" onClick={props.addVillager}>B</button>
            <button id="C" className="choiceButt" onClick={props.addVillager}>C</button>
            <button id="D" className="choiceButt" onClick={props.addVillager}>D</button>
            <button id="F" className="choiceButt" onClick={props.addVillager}>F</button>
        </div>
    )
}

export default ChoiceBar