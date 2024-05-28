const express = require("express");
const {
  checkEmail,
  checkUser,
  addAccount,
  checkPhone,
} = require("./database.js");

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3002;
app.use(bodyParser.json());
app.use(cors());

app.get("/user/:username", async (req, res) => {
  const username = req.params.username;
  const result = await checkUser(username);
  res.json(result);
});

app.get("/email/:email", async (req, res) => {
  const email = req.params.email;
  const result = await checkEmail(email);
  res.json(result);
});

app.post("/register", async (req, res) => {
  const body = req.body;
  const pass = body.password;
  
  const result = await addAccount(
    body.firstName,
    body.lastName,
    body.gender,
    body.username,
    body.email,
    body.phone,
    pass
  );
  res.json(result);
});
app.get("/phone/:phone", async (req, res) => {
  const phone = req.params.phone;
  const result = await checkPhone(phone);
  res.json(result);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
