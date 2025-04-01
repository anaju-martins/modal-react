import './Modal.css';

interface ConfirmationMessageProps {
  onClose: () => void;
}

function Confirm({ onClose }: ConfirmationMessageProps) {
  return (
    <div className="confirmation-container">
      <button 
        className="modal-close-btn" 
        aria-label="Close confirmation" 
        onClick={onClose}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      
      <h3 className="confirmation-title">Confirmed!</h3>
      <div className="loading-bar"></div>
      
    </div>
  );
}

export default Confirm;
