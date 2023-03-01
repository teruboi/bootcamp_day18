// importing modules and icon for close button
import React from 'react'
import ReactDOM from'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

// styling for modal
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    height: '600px',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '50px',
    zIndex: 1000,
    overflow: 'auto',
}

// styling for div covering the page when modal is opened
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

// main modal module, where the props calls for
// open: modal initial state
// children: content inside the modal
// onClose: function called when the modal is closed
export default function Modal({ open, children, onClose }) {
    // if the modal state is closed, module doesn't render anything
    if (!open) return null;
    
    // createPortal instance to render the modal to page
    // targetting div with id "portal"
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                {/* overflow: hidden -> adding scroll function when content overflowed the modal window */}
                <button onClick={onClose} style={{ overflow: 'hidden' }}>
                    <AiOutlineClose />
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}