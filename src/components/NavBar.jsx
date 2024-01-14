import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const nav = useNavigate();

  return (
    <nav id="navbar">
      <h1 className="text">Langlioni Micro</h1>
      <h2 className="text">The world's most advanced pizza oven</h2>
      <button onClick={() => nav("/what")}>What?</button>
      <button onClick={() => nav("/intro")}>Introduction</button>
      <button onClick={() => nav("/operation")}>Operation Demo</button>
      <button onClick={() => nav("/engineering")}>Engineering/Protoypes</button>
      <button onClick={() => nav("/patents")}>Patents</button>
      <button onClick={() => nav("/buy")}>Buy an Oven</button>
    </nav>
  );
}

//make nav bar and footer stick in place, make it so the body doesnt overlap with either
//add text and video embedding into components
//add hyperlinks to pdf files for patents
//add video thumbnail buttons to homepage
//styling and functionality
//pizza svg for address bar
