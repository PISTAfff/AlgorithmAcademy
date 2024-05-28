import "../styles/components/textField.css";
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
const TextField = forwardRef((props, ref) => {
  const [state, setState] = useState(0);
  const [lengthState, setlengthState] = useState("decline");
  useEffect(() => {
    let data = document.getElementById(
      "Input" + props.Label.replace(/\s/g, "")
    ).value;
    if (data.length >= 1) {
      setState(1);
    } else {
      setState(0);
    }
  }, [1]);
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function getText() {
    let data = document.getElementById(
      "Input" + props.Label.replace(/\s/g, "")
    ).value;
    return data;
  }
  useImperativeHandle(ref, () => ({
    refresh() {
      if (props.Label === "Confirm Password" || props.Label === "Password")
        props.getData(getText());
    },
  }));
  function refresh(ref) {
    if (props.Label === "Confirm Password" || props.Label === "Password")
      props.getData(getText());
  }
  function change() {
    refresh();
    let data = document.getElementById(
      "Input" + props.Label.replace(/\s/g, "")
    ).value;
    if (props.Type === "Email") {
      if (isValidEmail(data)) {
        setlengthState("approve");
      } else {
        setlengthState("decline");
      }
    } else {
      if (props.Type === "Password") {
        if (data.length >= props.Length + 3) {
          setlengthState("approve");
        } else if (data.length >= props.Length) {
          setlengthState("pass");
        } else {
          setlengthState("decline");
        }
      } else {
        if (props.Type === "Phone") {
          if (data.length === props.Length) {
            setlengthState("approve");
          } else {
            setlengthState("decline");
          }
        } else {
          if (data.length >= props.Length) {
            setlengthState("approve");
          } else {
            setlengthState("decline");
          }
        }
      }
    }

    if (data.length >= 1) {
      setState(1);
    } else {
      setState(0);
    }
  }
  return (
    <div className="textfield-container">
      <h4 className={"textfield-label " + (state == 1 && "written")}>
        {props.Label}
      </h4>
      <input
        id={"Input" + props.Label.replace(/\s/g, "")}
        className={
          (props.Label === "Confirm Password" ? props.State : lengthState) +
          " textfield-input "
        }
        onChange={change}
        type={props.Type}
      />
    </div>
  );
});
export default TextField;
