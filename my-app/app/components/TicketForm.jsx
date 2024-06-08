"use client"

import React ,{useState} from 'react';
import { useRouter } from 'next/navigation';
const TicketForm = () => {

const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;

    setFormData((prevState)=>({
        ...prevState,
        [name]:value,
    }));
};

const handleSubmit=()=>{
    console.log("submitted");
}

    const startingTicketData={
        title:"",
        description:"",
        priority:1,
        progress:0,
        status:"not started",
        category:"Hardware Problem",
    };

    const [formData,setFormData]=useState(startingTicketData);
  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
        <h3>Create your Ticket</h3>
        <label>Title</label>
        <input id='title' name='title' type="text" onChange={handleChange} required={true} value={formData.title}/>
        <label>Description</label>
        <textarea id="description" name="description" onChange={handleChange} required={true} value={formData.description} rows="5"/>

        <label>category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Hardware Problem">Software Problem</option>
          <option value="Hardware Problem">Project</option>
        </select>


      </form>
    </div>
  )
}

export default TicketForm
