import axios from 'axios';
import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/esm/Button';
const AddCategory = () => {
    const[category,SetCategory]=useState('');

    const handleInputChange = (event) => {
        const {value } = event.target;
        SetCategory(value);
        console.log(category);
      };
      const AddCategory=()=>{
       axios.post("http://localhost:3001/addCategory",{category}).then((res)=>{
        console.log(res)
       })
       .catch((Err)=>console.log(Err))
      }
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            
            placeholder="Category Name"
            value={category}
            onChange={handleInputChange}
          />
          <Button onClick={AddCategory}>AddCategory</Button>
        </Form.Group>
    </div>
  )
}

export default AddCategory
