import express from "express";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pat022603!",
  database: "fitwhey",
});

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM products WHERE id=?";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(200).json(data);
  });
});

export default router;
