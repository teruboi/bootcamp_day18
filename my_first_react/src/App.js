// importing npm and local modules
import React, { useState } from 'react'
import Modal from './modal'
import Form from './components/employeeForm'
import Show from './components/showContent'

// open modal button styling
const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1
}

// styling for show form content
const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "grey",
    padding: "10px"
}

export default function App() {
    // define modal state for toggling
    const [modalIsOpen, setModalIsOpen] = useState(false)

    // function for toggling modal state
    const toggleModal = () => setModalIsOpen(!modalIsOpen)

    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                <button onClick={toggleModal}>Open Modal</button>

                <Modal open={modalIsOpen} onClose={toggleModal}>
                    {/* Opening form inside the modal */}
                    <Form onClose={toggleModal}/>
                </Modal>
            </div>

            <div style={OTHER_CONTENT_STYLES}>
                {/* Data shown here */}
                <Show />
            </div>
        </>
    )
}