import { useEffect, useState } from "react";
import "../styles/components/verify.css";
import ButtonTwo from "./ButtonTwo";
import TextField from "./TextField";
function Verify() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  },[1]);

  return (
    <div className="verify-page-container">
      <div className="space big " />
      <div className="verify-container">
        <div className="verify-image-container"></div>
        <div className="verify-subcontainer">
          <header className="title">Verify Your Email</header>
          <p>{"We Sent an email to " + email + " containing a code "}</p>
          <div className="subcontainer">
            <TextField Label="Code" Type="normal" Length={6} />
            <a className="change-link" href="/Forget-Password">
              Wrong Email ? Change Email.
            </a>
            <div className="button-container">
              <ButtonTwo Text="Verify" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verify;
