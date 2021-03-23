import React from 'react'

const ButtonModal = (props) => {
    return <button onClick={
        e=>{
            e.preventDefault();
            props.setModal(!props.modal)
        }
    }>{props.modal? 'true': 'false'}</button>
}

export default ButtonModal
