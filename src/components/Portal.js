import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('portal')

export default function Portal({children, handleClose}) {
        return ReactDOM.createPortal(
            <div className='portalBack'
                onClick={handleClose}>
                <div className="portalDiv">
                    {children}
                    <button className="btn-save" onClick={handleClose}>Close</button> 
                </div>
            </div>,
            modalRoot,
        )
    }
    
    

