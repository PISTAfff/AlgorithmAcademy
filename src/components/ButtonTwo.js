import "../styles/components/button.css";
const ButtonTwo = (props) => {
  return (
    <>
      <div className={props.Name + " btn-two"} onClick={props.onClick}>
        <p>{props.Text}</p>
      </div>
    </>
  );
};
export default ButtonTwo;
