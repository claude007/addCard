
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import FirstModal from './Components/FirstModal';


function App() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<div className='text-center'>
<h1>welcome</h1>

<Button variant="primary" onClick={handleShow}>
        Add More thing to the card
      </Button>
      <FirstModal  show = {show} handleClose = {handleClose}/>
      </div>
  );
}

export default App;
