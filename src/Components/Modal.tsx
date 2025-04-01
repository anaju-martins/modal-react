import './Modal.css';
import { useState } from 'react';
import Confirm from './Confirm.tsx';

interface ModalProps{
    closeModal: (confirmed: boolean) => void;
  }

function Modal({closeModal}: ModalProps){

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirm = () => {
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
        closeModal(false);
    };

    return (
        <div className="modal-overlay">
      <div className="modal-container">
        {!showConfirmation  ? (
          <>
            <button 
              className="modal-close-btn" 
              aria-label="Close" 
              onClick={() => closeModal(false)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <h3 className="modal-title">Confirm Action</h3>
            
            <div className="modal-buttons">
              <button 
                className="modal-button modal-button-cancel" 
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
              <button 
                className="modal-button modal-button-confirm"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </>
        ) : (
            <Confirm onClose={handleCloseConfirmation} />
        )}
      </div>
    </div>
  );
}

export default Modal;