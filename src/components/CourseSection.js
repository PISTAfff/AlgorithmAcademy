import "../styles/components/courseSection.css";
import Course from "../components/Course";
function CourseSection() {
  return (
    <div className="info">
      <div className="course-section-main-container">
        <header className="title">Top Courses</header>
        <hr />
        <div className="course-section-sub-container">
          <Course
            Name="Programming"
            Presenter="PISTA"
            Description="A Beginners Course For Programming"
            Price="10$"
            Photo="Cyber.jpg"
            Link="Cyber"
          />
          <Course
            Name="Problem Solving"
            Presenter="Abduallah"
            Description="A Beginners Course For Problem Solving"
            Price="25$"
            Photo="IOT.jpg"
            Link="IOT"
          />
          <Course
            Name="Cyber Security"
            Presenter="Mostafa"
            Description="A Beginners Course For Cyber World"
            Price="55$"
            Photo="C.jpg"
            Link="C"
          />
        </div>
      </div>
    </div>
  );
}
export default CourseSection;
