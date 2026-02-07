import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Worker Management</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/add-worker" onClick={() => setOpen(false)}>Add Worker</Link>
        <Link to="/view-workers" onClick={() => setOpen(false)}>View Workers</Link>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
