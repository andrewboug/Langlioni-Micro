import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const nav = useNavigate();

  return (
    <div>
      <h1 id="starttext">The Langlioni Micro</h1>
      <button id="starthome" onClick={() => nav("/what")}>
        Find out about world's most advanced Pizza Oven!
      </button>

      <iframe
        id="startVideo"
        src="https://drive.google.com/file/d/1lwQdQP3BHQNkfDH1T0yl1hWDJXW0sxbx/preview"
        type="video/mp4"
      ></iframe>
    </div>
  );
}
