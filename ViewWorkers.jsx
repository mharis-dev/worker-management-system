import { useEffect, useState } from "react";
import axios from "axios";
import "./ViewWorkers.css";
import { Link } from "react-router-dom";


function ViewWorkers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/workers")
      .then(res => setWorkers(res.data));
  }, []);

  const deleteWorker = (id) => {
    axios.delete(`http://localhost:5000/delete-worker/${id}`)
      .then(() => {
        setWorkers(workers.filter(w => w.id !== id));
      });
  };

  return (
    <div className="table-container">
      <h2 className="table-title">View Workers</h2>

      <table className="worker-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>CNIC</th>
            <th>Gender</th>
            <th>Phone No#</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {workers.map(w => (
            <tr key={w.id}>
              <td>{w.name}</td>
              <td>{w.father_name}</td>
              <td>{w.cnic}</td>
              <td>{w.gender}</td>
              <td>{w.phone}</td>
              <td>{w.address}</td>
              <td>
                      <Link to={`/update-worker/${w.id}`}>
                            <button className="btn update">
                                 Update
                            </button>
                      </Link>
                <button
                  className="btn delete"
                  onClick={() => deleteWorker(w.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewWorkers;
