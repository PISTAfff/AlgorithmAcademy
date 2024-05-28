import "../styles/components/register.css";
import ButtonTwo from "./ButtonTwo";
import TextField from "./TextField";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const Register = (props) => {
  const [conPassSt8, setConPassSt8] = useState("declined");
  const [pass, setPass] = useState("");
  async function checkUser(username) {
    return axios
      .get(`http://localhost:3002/user/${username}`)
      .then((response) => {
        if (response.data == -1) {
          return 1;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return -1;
      });
  }
  async function checkEmail(email) {
    return axios
      .get(`http://localhost:3002/email/${email}`)
      .then((response) => {
        if (response.data == -1) {
          return 1;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return -1;
      });
  }
  async function checkPhone(phone) {
    return axios
      .get(`http://localhost:3002/phone/${phone}`)
      .then((response) => {
        if (response.data == -1) {
          return 1;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return -1;
      });
  }
  async function register() {
    let username = document.getElementById("InputUsername").value;
    let firstName = document.getElementById("InputFirstName").value;
    let lastName = document.getElementById("InputLastName").value;
    let email = document.getElementById("InputEmail").value;
    let password = document.getElementById("InputPassword").value;
    let confirmPassword = document.getElementById("InputConfirmPassword").value;
    let gender = document.getElementById("InputGender").value;
    let phone = document.getElementById("InputPhone").value;
    if (firstName.length >= 3 && lastName.length >= 3) {
      if (username.length >= 3) {
        if (isValidEmail(email)) {
          if (password.length >= 3) {
            if (password === confirmPassword) {
              if (gender) {
                if (phone.length === 11) {
                  let userState = await checkUser(username);
                  let emailState = await checkEmail(email);
                  let phoneState = await checkPhone(phone);
                  if (userState == 1 && emailState == 1 && phoneState == 1) {
                    createAccount(
                      username,
                      firstName,
                      lastName,
                      email,
                      password,
                      gender,
                      phone
                    );
                  } else {
                    //Find Out what data is there and fix it
                    alert("Account with this data already exists!");
                  }
                  return;
                }
              }
            }
          }
        }
      }
    }
    //Find Out whats Wrong and show it
    alert("SOMETHING IS WRONG");
  }
  function createAccount(
    username,
    firstName,
    lastName,
    email,
    password,
    gender,
    phone
  ) {
    axios
      .post("http://localhost:3002/register", {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender,
        phone: phone,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data == 2) {
          console.log("Account Created Successfully!");
          window.location.href = "../Verify";
        } else {
          console.log("Account Creation Failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    conPassRef.current.refresh();
  }, [pass]);

  const conPassRef = useRef();
  return (
    <div className="register-page-container">
      <div className="space big " />
      <div className="register-container">
        <div className="register-image-container"></div>
        <div className="register-subcontainer">
          <header className="title">{props.Title}</header>
          <div className="subcontainers">
            <div className="left-subcontainer">
              <TextField Label="Username" Type="Normal" Length={3} />
              <TextField Label="First Name" Type="Normal" Length={3} />
              <TextField
                Label="Password"
                Type="Password"
                Length={8}
                getData={(data) => {
                  setPass(data);
                }}
              />
              <select id="InputGender" className="gender-selector">
                <optgroup label="Gender">
                  <option value="" selected disabled hidden>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </optgroup>
              </select>
              <a className="change-link" href="/login">
                Already Have an account ? Login.
              </a>
            </div>
            <div className="right-subcontainer">
              <TextField Label="Email" Type="Email" Length={5} />
              <TextField Label="Last Name" Type="Normal" Length={3} />

              <TextField
                ref={conPassRef}
                Label="Confirm Password"
                Type="Password"
                Length={8}
                getData={(data) => {
                  setConPassSt8(
                    data.length >= 1
                      ? data === pass
                        ? "approve"
                        : "decline"
                      : "decline"
                  );
                }}
                State={conPassSt8}
              />
              <TextField Label="Phone" Type="Phone" Length={11} />
              <ButtonTwo
                Name="register-btn"
                Text="Register"
                onClick={register}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
