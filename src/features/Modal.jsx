import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function FeatureModal() {
    const [modal,setModal] = useState(false)
    const [modalb,setModalb] = useState(false)
    
    
    return (
      <>
    {modal === true? <Modal.ModalA/> : null}
    {modal && <Modal.ModalA onClose={()=> {setModal(false)}} />}
    
    {modalb === true? <Modal.ModalB/> : null}
    {modalb && <Modal.ModalB onClose={()=> {setModalb(false)}} />}

    <h1>Modal</h1>
    <Button.Primary onClick ={() => {setModal(true)}}>open modal</Button.Primary>
    
    <Button.Nagative 
    type ='large' 
    outline
    onClick ={() => {setModalb(true)}}
    >open modal</Button.Nagative>

    </>

  )
}

export default FeatureModal