import "../styles/components/logo.css";
const Logo = (props) => {
  const backgroundImage = {
    backgroundImage: "url(/images/icons/Logo.svg)",
  };
  return (
    <div className={props.Name + " image-background"} style={backgroundImage} />
  );
};

export default Logo;
