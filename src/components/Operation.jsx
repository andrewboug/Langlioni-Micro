export default function Operation() {
  return (
    <div id="operation">
      <div className="section">
        <h1 className="text">Operation Demo</h1>
      </div>
      <div className="body-container">
        <p>Watch the Langlioni Micro in action!</p>
        <div className="video-container">
          <iframe
            src="https://drive.google.com/file/d/1igFJDyKMBAhxDiMVEZlrlvxVTslIDeP-/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://drive.google.com/file/d/1PBu6qnbPFMouh0rAxv36zRnzeKLLRiLK/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
