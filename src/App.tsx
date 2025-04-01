import { useState } from 'react';
import './App.css'
import Modal from './Components/Modal';



function App() {
  
  const [openModal, setOpenModal] = useState(false); 

  return (
    <div className="App">
      <div className="content-container">
        <p className="instruction-text">Click on the button to open the modal</p>
        <button className="openModalBtn" onClick={ () => {
          setOpenModal(true);
        }}>Open</button>
        {openModal && <Modal closeModal={setOpenModal}/>}
      </div>
</div>
  );
}

export default App
