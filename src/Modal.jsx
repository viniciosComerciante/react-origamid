import React from 'react'

const Modal = ({modal, setModal}) => {
    
    console.log(modal);

    if(modal){
        return (
            <div>
                este é um modal <button onClick={
                    e=>{
                        e.preventDefault();
                        setModal(false);
                    }
                }>X</button>
            </div>
        )
    }else{
        return null;
    }


    
}

export default Modal
