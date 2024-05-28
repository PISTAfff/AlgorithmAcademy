import "../styles/components/categoryItem.css";
const CategoryItem = (props) => {
  const backgroundImage = {
    backgroundImage: "url(images/icons/" + props.Icon + ")",
  };
  return (
    <a
      href={"/" + props.Link}
      className={
        (props.Selected == "t" && "category-item-selected") +
        " category-item-container"
      }
    >
      <div className="category-item-icon" style={backgroundImage}></div>
      <div className="category-item-background">
        <p className="category-name">{props.Name}</p>
      </div>
    </a>
  );
};
export default CategoryItem;
