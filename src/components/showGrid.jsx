import React from 'react'

const ShowGrid = (props) => {

    let sGrid = [...props.sGrid].map(element => { return element })
    let aGrid = [...props.aGrid].map(element => { return element })
    let bGrid = [...props.bGrid].map(element => { return element })
    let cGrid = [...props.cGrid].map(element => { return element })
    let dGrid = [...props.dGrid].map(element => { return element })
    let fGrid = [...props.fGrid].map(element => { return element })

    return(
        <div>
            <table>
                <tbody>
                    <tr className="primary">
                        <th>S</th>
                        {sGrid}
                    </tr>
                    <tr className="secondary">
                        <th>A</th>
                        {aGrid}
                    </tr>
                    <tr className="primary">
                        <th>B</th>
                        {bGrid}
                    </tr>
                    <tr className="secondary">
                        <th>C</th>
                        {cGrid}
                    </tr>
                    <tr className="primary">
                        <th>D</th>
                        {dGrid}
                    </tr>
                    <tr className="secondary">
                        <th>F</th>
                        {fGrid}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowGrid