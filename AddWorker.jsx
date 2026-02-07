import { useState } from "react";
import axios from "axios";
import "./AddWorker.css";

function AddWorker() {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    father_name: "",
    gender: "",
    phone:"",
    address:""
  });

 const submit = (e) => {
  e.preventDefault();

  axios.post("http://localhost:5000/add-worker", form)
    .then(() => alert("Worker Added Successfully ✅"))
    .catch(err => {
      console.error(err);
      alert("Error adding worker ❌");
    });
};

  return (
   
 
 
    <div className="form-container">
      <h2 className="form-title">Add Worker</h2>

      <div className="form-grid">
        <input
          type="text"
          placeholder="Worker Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Father Name"
          onChange={e => setForm({ ...form, father_name: e.target.value })}
        />

        <input
          type="text"
          placeholder="CNIC"
          onChange={e => setForm({ ...form, cnic: e.target.value })}
        />

        <select
          onChange={e => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

         <input
          type="text"
          placeholder="phone"
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />
         <input
          type="text"
          placeholder="Address"
          onChange={e => setForm({ ...form, address: e.target.value })}
        />

      </div>
      
      <button className="submit-btn" onClick={submit}>
        Add Worker
      </button>
      </div>

    
  );
}

export default AddWorker;
