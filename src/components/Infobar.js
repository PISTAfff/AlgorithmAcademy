import SocialList from "./SocialList";
import "../styles/components/infobar.css";
function Infobar() {
  return (
    <div className="info-bar">
      <a className="phone" href="tel:+201124041969">
        <div>
          <svg
            className="phone-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="phone"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
          </svg>
        </div>
        <div className="phone-area">+20 112 404 1959</div>
      </a>
      <a className="email" href="mailto:info@algorithmit.tech">
        <div>
          <svg
            className="email-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="email"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
          </svg>
        </div>
        <div className="email-area">info@algorithmit.tech</div>
      </a>
      <SocialList />
    </div>
  );
}
export default Infobar;
