const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",       // XAMPP default empty hota hai
  database: "worker_management"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed ❌");
  } else {
    console.log("MySQL connected successfully ✅");
  }
});

module.exports = db;
