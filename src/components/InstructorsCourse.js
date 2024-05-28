import "../styles/components/instructorCourse.css";
import { useState } from "react";
const InstructorCourse = (props) => {
  const backgroundImage = {
    backgroundImage: "url(images/uploads/courses/" + props.Photo + ")",
  };
  const [state, setState] = useState(0);
  return (
    <div className="instructor-course">
      <a
        href={"/Course/" + props.Link}
        className="instructor-course-name-section"
      >
        {props.Name}
      </a>
      <div className="instructor-course-data-container">
        <div
          className={
            (state == 1 && "instructor-course-data-closed") +
            " instructor-course-image-container"
          }
        >
          <div
            className="instructor-course-image"
            style={backgroundImage}
          ></div>
        </div>
        <div
          className={
            (state == 1 && "instructor-course-description-opened") +
            " instructor-course-description-container"
          }
        >
          <div
            className={
              (state == 1 && "instructor-course-arrow-opened") +
              " instructor-course-arrow"
            }
            onClick={() => setState((preval) => (preval == 1 ? 0 : 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="20"
              id="arrow"
            >
              <path
                fill-rule="evenodd"
                d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
              ></path>
            </svg>
          </div>
          <div className="instructor-course-data">
            <div className="instructor-course-description ">
              <p className="limit-datay">{props.Description}</p>
            </div>
            <hr className="hor-line" />
            <div className="instructor-course-info">
              <hr className="ver-line price" />
              <div className="instructor-course-price">
                Price : {props.Price}
              </div>
              <hr className="ver-line lectures" />
              <div className="instructor-course-lectures">
                Lectures : {props.Lectures}
              </div>
              <hr className="ver-line duration" />
              <div className="instructor-course-duration">
                Duration : {props.Duration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourse;
