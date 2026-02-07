# Worker Management System

A full-stack **Worker Management System** built with **React** (frontend), **Node.js + Express** (backend), and **MySQL** (database).  
This project allows you to **add, view, update, and delete workers** in a simple and responsive interface.

---

## 🔹 Features

- Add new workers with **name, father name, CNIC, gender, phone, address**  
- View all workers in a **beautiful, responsive table**  
- Update and delete workers directly from the table  
- Responsive navigation bar with **Add Worker** and **View Workers** options  
- Full **REST API** backend with **Node.js + Express**  
- **MySQL database** for persistent storage  

---

## 🔹 Tech Stack

- **Frontend:** React, Axios, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Styling:** CSS, Flexbox, Grid  

---

## 🔹 Screenshots

### Add Worker Form
<img width="1366" height="689" alt="image" src="https://github.com/user-attachments/assets/fe3f9075-71d6-4a46-aa26-f93938a06214" />

### View Workers Table
<img width="1365" height="643" alt="image" src="https://github.com/user-attachments/assets/8290afc7-df41-4953-9964-c5d620e6a34e" />

### Update Worker
<img width="1366" height="639" alt="image" src="https://github.com/user-attachments/assets/d5e59249-ac86-448b-af01-b89be8ee63c4" />

---

## 🔹 Project Structure

worker-management-system/
├── backend/ # Node.js backend
│ ├── server.js # Express server
│ ├── db.js # MySQL connection
│ └── package.json
├── worker-management/ # React frontend (Vite)
│ ├── src/
│ │ ├── pages/
│ │ │ ├── AddWorker.jsx
│ │ │ └── ViewWorkers.jsx
│ │ ├── components/
│ │ │ └── Navbar.jsx
│ │ └── App.jsx
│ └── package.json
└── .gitignore

4. Database Setup

Create MySQL database named worker_management

Create workers table:

CREATE TABLE workers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  father_name VARCHAR(255),
  cnic VARCHAR(20),
  gender VARCHAR(10),
  phone VARCHAR(20),
  address VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


