const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend + MySQL is running 🚀");
});

/* =========================
   ADD WORKER
========================= */

app.post("/add-worker", (req, res) => {
  const { name, father_name, cnic, gender, phone, address } = req.body;

  const sql =
    "INSERT INTO workers (name, father_name, cnic, gender, phone, address ) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sql, [name, father_name, cnic, gender, phone, address], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error adding worker");
    }
    res.send("Worker added successfully");
  });
});

/* =========================
   GET ALL WORKERS
========================= */
app.get("/workers", (req, res) => {
  db.query("SELECT * FROM workers", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching workers");
    }
    res.json(result);
  });
});

/* =========================
   DELETE WORKER
========================= */
app.delete("/delete-worker/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM workers WHERE id = ?", [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.send("Worker deleted");
  });
});
// get worker for updation 
app.put("/update-worker/:id", (req, res) => {
  const id = req.params.id;
  const { name, father_name, cnic, gender, phone, address } = req.body;

  console.log("UPDATE API HIT");
  console.log("ID:", id);
  console.log("BODY:", req.body);

  const sql = `
    UPDATE workers 
    SET name=?, father_name=?, cnic=?, gender=?, phone=?, address=?
    WHERE id=?
  `;

  db.query(
    sql,
    [name, father_name, cnic, gender, phone, address, id],
    (err, result) => {
      if (err) {
        console.error("MYSQL ERROR:", err);
        return res.status(500).json(err);
      }

      console.log("AFFECTED ROWS:", result.affectedRows);

      res.json(result);
    }
  );
});


// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
