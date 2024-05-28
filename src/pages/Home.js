import "../styles/pages/home.css";
import CategoryItem from "../components/CategoryItem";
import { useState, useEffect } from "react";
import InstructorCourse from "../components/InstructorsCourse";
import CourseSection from "../components/CourseSection";
import Button from "../components/Button";
function Home() {
  const [isChosen, setIsChosen] = useState(2);
  const [InstructorShown, setInstructorShown] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let names = [
    "Eng.Mostafa Algorithm",
    "Eng.Abdullah Ahmed",
    "Eng.Osama",
    "Eng.Mahmoud",
  ];
  let descriptions = [
    "Eng. Mustafa Atef became more and more interested in programming and development until he studied other languages such as Python, Java, PHP, HTML, JS, CSS,Kotlin, SQL, and Bash Script, and after he began the path of creative learning, creating many projects and decided to be Among the elite providers of technical content in the Arab world, many specialists in information and its legalization have provided awareness in the field of protection and protection of information, as is the case with my website electronically, to provide the greatest possible dissemination of scientific methods in the field of programming, technology and its security.",
    "Hey there! I'm ENG . Abdullah Ahmed, and I'm all about teaching programming with a special love for IoT and embedded systems. I've been rocking it as an instructor for two years now, sharing my knowledge in languages like C, Java, C++, Python, HTML, CSS, and Arduino C. I've also been in the mix of national competitions, putting my skills to the test and showing what I'm made of! Outside of the classroom, I'm always diving into cool projects that blend tech and creativity. For me, education is everything. I truly believe in its power to spark inspiration and empower the next generation of programmers. So, let's keep this journey going, making waves in the world of programming and beyond!",
    "I am a Network Operations and Maintenance at Telecom Egypt, the largest provider of fixed-line services in the Middle East and Africa, My core competencies include building and maintaining telecommunications networks, working with various types of cards and cabinets, and troubleshooting network issues. In my current role, I have been part of the journey of constructing and delivering network services to our customers, from the ground up. I have gained hands-on experience with Linux, API documentation, and wireless networking, as well as valuable insights into the telecommunications industry.",
    "Eng. Mahmoud Hossam He became more and more interested in programming and development until he studied other languages ​​such as Python, Java, HTML, JS, CSS, Kotlin, xml SQL and plsql He also mastered algorithms, data structure, and programming languages.Able to code, test, debug, and monitor changes in mobile applications,And also master the knowledge of mobile application terminology, He also mastered the ability to adapt existing mobile phone applications",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds >= 5) {
      inc(false);
    }
  }, [seconds]);

  let photos = ["Algorithm.png", "T3mia.png", "Osama.png", "Mahmoud.png"];
  const customStyle = {
    backgroundImage:
      "url(images/uploads/profiles/" + photos[InstructorShown] + ")",
  };
  function inc(isinst) {
    if (isinst) {
      if (InstructorShown < 3) {
        setInstructorShown(InstructorShown + 1);
      } else {
        setInstructorShown(0);
      }
    } else {
      setSeconds(0);
      if (isChosen < 4) {
        setIsChosen(isChosen + 1);
      } else {
        setIsChosen(0);
      }
    }
  }
  function dec(isinst) {
    if (isinst) {
      if (InstructorShown > 0) {
        setInstructorShown(InstructorShown - 1);
      } else {
        setInstructorShown(3);
      }
    } else {
      setSeconds(0);
      if (isChosen > 0) {
        setIsChosen(isChosen - 1);
      } else {
        setIsChosen(4);
      }
    }
  }
  return (
    <div className="home-main-container">
      <div className="home-header-container">
        <p className="home-header">Algorithm Academy</p>
      </div>
      <header className="home-categories-header title">Categories</header>
      <div className="home-categories-container">
        <div className="white-space">
          <div
            className="home-categories-arrow-container left-arrow"
            onClick={() => {
              dec(false);
            }}
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
        </div>
        <div className={"category-item " + "item" + isChosen}>
          <CategoryItem
            Name="Networking"
            Icon="Networking.svg"
            Selected={isChosen == 0 ? "t" : "f"}
            Link="Networking"
          />
          <CategoryItem
            Name="Programming"
            Icon="Programming.svg"
            Selected={isChosen == 1 ? "t" : "f"}
            Link="Programming"
          />
          <CategoryItem
            Name="Cyber Secuirty"
            Icon="Cyber.svg"
            Selected={isChosen == 2 ? "t" : "f"}
            Link="Cyber_Secuirty"
          />
          <CategoryItem
            Name="AI"
            Icon="AI.svg"
            Selected={isChosen == 3 ? "t" : "f"}
            Link="Artifitial_Intelligence"
          />
          <CategoryItem
            Name="Computer Science"
            Icon="Computer_Science.svg"
            Selected={isChosen == 4 ? "t" : "f"}
            Link="Computer_Science"
          />
        </div>

        <div className="white-space">
          <div
            className="home-categories-arrow-container"
            onClick={() => {
              inc(false);
            }}
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
        </div>
      </div>
      <div className="instructors-section info">
        <div className="instructors-container info-container">
          <div
            className="instructor-arrow-container instructor-arrow-left"
            onClick={() => {
              dec(true);
            }}
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
          <div className="data-container">
            <div className="instructors-data">
              <div className="instructor-description-container">
                <div className="description">
                  <header className="academy-instructors-header title">
                    Academy Instructors
                  </header>
                  <p>{descriptions[InstructorShown]}</p>
                </div>
                <div className="profile-container">
                  <div className="picture-container">
                    <div style={customStyle} className="profile-picture"></div>
                  </div>
                  <div className="instructor-name">
                    {names[InstructorShown]}
                  </div>
                  <div className="buttons-container">
                    <Button Name="follow-button" Text="Follow" />
                    <Button Name="view-profile-button" Text="View Profile" />
                  </div>
                </div>
              </div>
            </div>
            <div className="courses-info-container">
              <div className="courses-info-sub-container">
                <InstructorCourse
                  Name="Programming"
                  Description=" This is a beginner friendly course About Programming It Teachs you
              The Very First Step in the world of programming"
                  Lectures="12"
                  Duration="12hr"
                  Price="Free"
                  Photo="C.jpg"
                  Link="C"
                />
                <InstructorCourse
                  Name="Cyber Security"
                  Description=" This is a beginner friendly course About Cyber Security It Teachs you
              The Very First Step in the world of Cyber Security"
                  Lectures="5"
                  Duration="10hr"
                  Price="25$"
                  Photo="Cyber.jpg"
                  Link="Cyber_Security"
                />
              </div>
              <div className="view-more-courses-container">
                <Button Name="view-more-button" Text="View More" />
              </div>
            </div>
          </div>

          <div
            className="instructor-arrow-container"
            onClick={() => {
              inc(true);
            }}
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
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="space" />
      <CourseSection />
    </div>
  );
}
export default Home;
