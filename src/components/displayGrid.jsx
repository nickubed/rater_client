// import React, {useState, useEffect} from 'react'

// import { Redirect } from 'react-router-dom'
// import DisplayCell from './displayCell'

// // Don't judge me on this atrocious component, please. Needs refactor.
// const DisplayGrid = (props) => {
    
//     let [cell, setCell] = useState()
    

//     useEffect(() => {

//     }, [props.grid, viewGrid, tabHead])



//     if(!props.user){
//         return <Redirect to="/" />
//     }

//     const submitEdit = (newGrade, villagerId) => {
//         let data = {
//             user: props.user.id,
//             grade: newGrade
//         }
//         fetch(`${process.env.REACT_APP_DB_URL}/villager/${villagerId}`, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//             .then(() => {
//                 console.log('posted')
//                 props.setPostEdit(true)
//             })
//     }

//     return(
//         <div>
//             <table>
//                 <thead>
//                     {tabHead}
//                 </thead>
//             </table>
//             {cell}
//         </div>
//     )
// }

// export default DisplayGrid