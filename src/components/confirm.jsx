import React from 'react'

const Confirm = (props) => {
    if(props.user){
        return(
            <div>
                <h1>Thank you!</h1>
                <button onClick={props.submitChoice}>Submit!</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Please Log In to Submit!</h1>
            </div>
        )
    }
}

export default Confirm