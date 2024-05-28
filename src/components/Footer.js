import "../styles/components/footer.css";
import SocialList from "./SocialList";
import Seperator from "./Seperator";
function Footer() {
  return (
    <div className="footer-container">
      <Seperator />
      <div className="credit-container">
        <p className="credits">Algorithm Tech</p>
        <SocialList />
      </div>
    </div>
  );
}
export default Footer;
