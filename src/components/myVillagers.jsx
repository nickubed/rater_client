import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../static/griddle.css'
// import DisplayGrid from './displayGrid'
import DisplayCell from './displayCell'

const MyVillagers = (props) => {
    let [headings, setHeadings] = useState(['S', 'A', 'B', 'C', 'D', 'F'])
    let [grid, setGrid] = useState([])
    let [postEdit, setPostEdit] = useState(false)
    let [tabHead, setTabHead] = useState()
    let [tabBody, setTabBody] = useState()
    
    useEffect(() => {

        // const leet = (grade) => {
        //     let result = grid.forEach(villager => {
        //         if(villager.usersVillagers.grade === grade){
        //             // console.log('hit')
        //             return <td>{villager.name}</td>
        //         }
        //     })
        //     console.log(result)
        // }

        // const radBoy = () => {
        //     let head = headings.map(grade => {
        //         return ( 
        //             <th>{grade}</th>
        //         )
        //     })
        //     setTabHead(head)
        // }

        const performFetch = async() => { 
            let result = await fetch(`${process.env.REACT_APP_DB_URL}/villager/${props.user.id}`)
            .then(response => response.json())
            result.forEach((villager) => {
                setGrid(grid => [...grid, villager])
            })
            // radBoy()
        }
        performFetch()
    }, [props.user])


    
    if(!props.user){
        return(
            <Redirect to="/" />
        )
    }

    return(
        <div>
            <table>
                <thead>
                    {/* {tabHead} */}
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'S' ? <img className="villagerPic" src={villager.img} alt={villager.name} />: null)}
                    </tr>
                    <tr>
                        <td>A</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'A' ? <img className="villagerPic" src={villager.img} alt={villager.name} /> : null)}
                    </tr>
                    <tr>
                        <td>B</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'B' ? <img className="villagerPic" src={villager.img} alt={villager.name} /> : null)}
                    </tr>
                    <tr>
                        <td>C</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'C' ? <img className="villagerPic" src={villager.img} alt={villager.name} /> : null)}
                    </tr>
                    <tr>
                        <td>D</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'D' ? <img className="villagerPic" src={villager.img} alt={villager.name} /> : null)}
                    </tr>
                    <tr>
                        <td>F</td>
                        {grid.map((villager) => villager.usersVillagers.grade === 'F' ? <img className="villagerPic" src={villager.img} alt={villager.name} /> : null)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyVillagers