const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "154.56.34.24",
    user: "u892910779_test",
    password: "l1|1-!ai?e:L[&gN~zN2",
    database: "u892910779_testdb",
  })
  .promise();

// 1 = found
//-1 = not found
// 0 = Error
// 2 = inserted
async function checkEmail(email) {
  try {
    const res = await pool.query("SELECT email FROM users where email=?", [
      email,
    ]);
    if (res[0].length > 0) {
      return 1;
    } else {
      return -1;
    }
  } catch (error) {
    return 0;
  }
}
async function checkUser(username) {
  try {
    const res = await pool.query(
      "SELECT username FROM users where username=?",
      [username]
    );
    if (res[0].length > 0) {
      return 1;
    } else {
      return -1;
    }
  } catch (error) {
    return 0;
  }
}
async function checkPhone(phone) {
  try {
    const res = await pool.query("SELECT phone FROM users where phone=?", [
      phone,
    ]);
    if (res[0].length > 0) {
      return 1;
    } else {
      return -1;
    }
  } catch (error) {
    return 0;
  }
}
async function addAccount(
  firstName,
  lastName,
  gender,
  username,
  email,
  phone,
  password
) {
  try {
    const res = await pool.query(
      "INSERT INTO users(`firstname`,`lastname`,`gender`,`username`,`email`,`phone`,`password`)VALUES(?,?,?,?,?,?,?)",
      [firstName, lastName, gender, username, email, phone, password]
    );
    return 2;
  } catch (error) {
    return 0;
  }
}
module.exports = {
  checkEmail,
  checkUser,
  addAccount,
  checkPhone,
};
