import "../styles/components/seperator.css";
import Logo from "./Logo";
function Seperator() {
  return (
    <>
      <div className="space"></div>
      <div className="seperator-container">
        <hr className="left-seperator"></hr>
        <Logo Name="footer-logo" />
        <hr className="right-seperator"></hr>
      </div>
    </>
  );
}
export default Seperator;
