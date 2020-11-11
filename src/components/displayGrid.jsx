import React, {useState, useEffect} from 'react'
import '../static/griddle.css'
import {Redirect} from 'react-router-dom'

const DisplayGrid = (props) => {
    let [fGrid, setfGrid] = useState([])
    let [dGrid, setdGrid] = useState([])
    let [cGrid, setcGrid] = useState([])
    let [bGrid, setbGrid] = useState([])
    let [aGrid, setaGrid] = useState([])
    let [sGrid, setsGrid] = useState([])
    let f = []
    let d = []
    let c = []
    let b = []
    let a = []
    let s = []
    useEffect(() => {
        if(props.user){
            fetch(`${process.env.REACT_APP_DB_URL}/villager/${props.user.id}`)
            .then(response => response.json())
                .then(villagers => {
                    villagers.forEach((villager) => {
                        if(villager.usersVillagers.grade === 'F'){
                            f.push(villager)
                        }
                        if(villager.usersVillagers.grade === 'D'){
                            d.push(villager)
                        }
                        if(villager.usersVillagers.grade === 'C'){
                            c.push(villager)
                        }
                        if(villager.usersVillagers.grade === 'B'){
                            b.push(villager)
                        }
                        if(villager.usersVillagers.grade === 'A'){
                            a.push(villager)
                        }
                        if(villager.usersVillagers.grade === 'S'){
                            s.push(villager)
                        }
                    })
                }
            )
        }
    })

    const handleCheck = () => {
        renderRow()
    }

    const renderRow = () => {
        setfGrid(f.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}><img className="villagerPic" src={villager.img} alt={villager.name}></img></td>
        }))
        setdGrid(d.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}><img className="villagerPic" src={villager.img} alt={villager.name}></img></td>
        }))
        setcGrid(c.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}><img className="villagerPic" src={villager.img} alt={villager.name}></img></td>
        }))
        setbGrid(b.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}><img className="villagerPic" src={villager.img} alt={villager.name}></img></td>
        }))
        setaGrid(a.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}><img className="villagerPic" src={villager.img} alt={villager.name}></img></td>
        }))
        setsGrid(s.map((villager, i) => {
            console.log('Chirp!')
            return <td key={i}><img className="villagerPic" src={villager.img} alt={villager.name}></img></td>
        }))
    }
    
    if(!props.user){
        return <Redirect to="/" />
    }

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>S</th>
                        {sGrid}
                    </tr>
                    <tr>
                        <th>A</th>
                        {aGrid}
                    </tr>
                    <tr>
                        <th>B</th>
                        {bGrid}
                    </tr>
                    <tr>
                        <th>C</th>
                        {cGrid}
                    </tr>
                    <tr>
                        <th>D</th>
                        {dGrid}
                    </tr>
                    <tr>
                        <th>F</th>
                        {fGrid}
                    </tr>
                </tbody>
            </table>
            <button onClick={handleCheck}>Check</button>
        </div>
    )
}

export default DisplayGrid