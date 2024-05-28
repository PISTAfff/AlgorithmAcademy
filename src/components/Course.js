import "../styles/components/course.css";
const Course = (props) => {
  const backgroundImage = {
    backgroundImage: "url(images/uploads/courses/" + props.Photo + ")",
  };
  return (
    <div className="course-container">
      <div className="course-info">
        <div className="course-image" style={backgroundImage}></div>
        <div className="course-data">
          <div className="course-name">{props.Name}</div>
          <div className="course-description">
            <p className="limit-datax">{props.Description}</p>
          </div>
          <div className="course-presenter">{props.Presenter}</div>
          <hr className="course-seperator" />
          <div className="course-price">{props.Price}</div>
        </div>
      </div>
      <a href={"/Course/" + props.Link} className="course-link" />
    </div>
  );
};
export default Course;
