import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal.jsx';

const State = (props) => {

    const [modal, setModal] = React.useState('false');

    return (
        <div>
            <Modal modal={modal} setModal={setModal}></Modal>
            <div>{modal? 'Modal Aberto': 'Modal Fechado'}</div>
            <ButtonModal setModal={setModal} modal={modal}></ButtonModal>
        </div>
    )
}

export default State
