import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./AddWorker.css"; // same styling reuse


function UpdateWorker() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    father_name: "",
    cnic: "",
    gender: "",
    phone: "",
    address: ""
  });

  // 🔹 fetch worker by id
  useEffect(() => {
    axios.get(`http://localhost:5000/workers/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  // 🔹 update worker
  const updateWorker = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/update-worker/${id}`, form)
      .then(() => {
        alert("Worker Updated Successfully ✅");
        navigate("/view-workers");
      })
      .catch(err => {
        console.error(err);
        alert("Error updating worker ❌");
      });
  };

  return (
    <form className="form-container" onSubmit={updateWorker}>
      <h2 className="form-title">Update Worker</h2>

      <div className="form-grid">
        <input
          type="text"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Worker Name"
        />

        <input
          type="text"
          value={form.father_name}
          onChange={e => setForm({ ...form, father_name: e.target.value })}
          placeholder="Father Name"
        />

        <input
          type="text"
          value={form.cnic}
          onChange={e => setForm({ ...form, cnic: e.target.value })}
          placeholder="CNIC"
        />

        <select
          value={form.gender}
          onChange={e => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone"
        />

        <input
          type="text"
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
          placeholder="Address"
        />
      </div>

      <button className="submit-btn" type="submit">
        Update Worker
      </button>
    </form>
  );
}

export default UpdateWorker;
