import "../styles/components/button.css";
const Button = (props) => {
  return (
    <>
      <div className={props.Name + " button"} onClick={props.onClick}>
        <div className="bracket">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="138.000000pt"
            height="82.000000pt"
            viewBox="0 0 138.000000 82.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,82.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M194 711 c-46 -28 -58 -67 -50 -167 6 -82 6 -84 -13 -72 -15 9 -25 9 -45 0 -32 -14 -35 -51 -6 -77 17 -15 24 -16 46 -6 15 6 28 10 29 9 1 -2 8 -59 14 -127 6 -69 13 -127 15 -129 10 -9 182 -69 189 -65 4 2 7 15 7 29 0 20 -11 30 -64 56 l-63 31 -7 111 c-5 88 -10 114 -24 124 -16 12 -16 14 0 26 12 9 19 38 26 100 6 48 15 93 20 98 6 6 34 13 61 16 48 4 51 6 51 33 l0 29 -77 0 c-59 0 -86 -5 -109 -19z"></path>
            </g>
          </svg>
        </div>
        <p>{props.Text}</p>
        <div className="bracket">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="138.000000pt"
            height="82.000000pt"
            viewBox="0 0 138.000000 82.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,82.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M986 743 c-14 -36 -5 -50 58 -83 l63 -34 6 -89 c5 -69 10 -92 23 -102 17 -12 16 -13 -4 -26 -19 -12 -22 -23 -22 -81 0 -37 -5 -89 -11 -116 l-10 -50 -55 -7 c-52 -6 -54 -8 -54 -36 l0 -29 76 0 c86 0 121 15 149 62 15 26 16 45 10 140 l-7 110 22 -12 c17 -9 26 -8 46 5 53 35 9 104 -50 77 -24 -11 -25 -10 -31 56 -3 37 -9 87 -13 111 l-7 45 -92 37 c-76 30 -93 34 -97 22z m178 -497 c-3 -15 -8 -25 -11 -23 -2 3 -1 17 3 31 3 15 8 25 11 23 2 -3 1 -17 -3 -31z"></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Button;
