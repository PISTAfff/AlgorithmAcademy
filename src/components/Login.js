import "../styles/components/login.css";
import ButtonTwo from "./ButtonTwo";
import TextField from "./TextField";
const Login = (props) => {
  return (
    <div className="login-page-container">
      <div className="space big " />
      <div className="login-container">
        <div className="login-image-container"></div>
        <div className="login-subcontainer">
          <header className="title">{props.Title}</header>
          <div className="subcontainer">
            <TextField Label="Username" Type="Normal" Length={3} />
            <TextField
              Label="Password"
              Type="Password"
              Length={8}
              getData={() => {}}
            />
            <div className="links-container">
              <a className="change-link" href="/Forget-Password">
                Forgot Password?
              </a>
              <a className="change-link" href="/register">
                Dont Have an Account ? Register.
              </a>
            </div>
            <div className="button-container">
              <ButtonTwo Text="Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
