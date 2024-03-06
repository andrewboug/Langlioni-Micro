import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const nav = useNavigate();

  return (
    <div id="navbar-container">
      <div className="nav-title">
        <h1 className="text">Langlioni Micro</h1>
        <div>&nbsp;</div>
        <h2 className="text">The world's most advanced pizza oven</h2>
      </div>
      <div className="nav-buttons">
        <button onClick={() => nav("/")}>What?</button>
        <button onClick={() => nav("/intro")}>Introduction</button>
        <button onClick={() => nav("/operation")}>Operation Demo</button>
        <button onClick={() => nav("/engineering")}>
          Engineering/Protoypes
        </button>
        <button onClick={() => nav("/patents")}>Patents</button>
        <button onClick={() => nav("/contact")}>Contact Us</button>
      </div>
    </div>
  );
}

//make nav bar and footer stick in place, make it so the body doesnt overlap with either
//add text and video embedding into components
//add hyperlinks to pdf files for patents
//add video thumbnail buttons to homepage
//styling and functionality
//pizza svg for address bar
