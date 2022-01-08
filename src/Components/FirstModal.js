import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import CardRecords from "./CardRecords";

const FirstModal = ({ show, handleClose }) => {
  
    const [userReg, setUserReg] = useState({
        'fullname':'',
        'username':'',
        'email':'',
        'password':''
    })
    const [records, setRecords] = useState([])

    const handleChange = (e) => {
      const {name, value } = e.target
     
          setUserReg({...userReg, [name]: value})
        // console.log(userReg)
    }   

    const handleSubmits = () => {
        // e.preventDefault();
        const newRecord = {...userReg, id: new Date().getTime().toString()} 
        console.log(newRecord)
        setRecords([...records, newRecord])
        setUserReg({username: '', email:'', password:'', fullname: ''})
      handleClose()
    }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register you client</Modal.Title>
        </Modal.Header>
        <form action="">
          <Modal.Body>
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              // value={userReg.fullname}
              onChange={handleChange}
              autoComplete="off"
              className="form-control"

              id="fullname"
              name='fullname'
            
            />
            <label htmlFor="username">username</label>
            <input
              type="text"
              value={userReg.username}
              onChange={handleChange}
              autoComplete="off"
              className="form-control"
              name="username"
              id="username"
              required
            />
            <label htmlFor="email">email</label>
            <input
              type="text"
              value={userReg.email}
              onChange={handleChange}
              autoComplete="off"
              className="form-control"
              name="email"
              id="email"
              required
            />
            <label htmlFor="password">Adress</label>
            <input
              type="text"
              value={userReg.password}
              onChange={handleChange}
              autoComplete="off"
              className="form-control"
              name="password"
              id="password"
              required
            />
          </Modal.Body>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmits}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
      {
        records.map((r)=> {
            return (
                <div className="task-container"  key={r.id}>
                    <CardRecords r={r} />
                 </div>
            )
        })
      }
      </div>
    </div>
  );
};

export default FirstModal;
