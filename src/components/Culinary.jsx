export default function Culinary() {
  return (
    <div id="operation">
      <div className="body-container">
        <div className="section">
          <h1 className="text"> Culinary</h1>
        </div>

        <p>Watch the Langlioni Micro in action!</p>
        <div className="video-container">
          <iframe
            src="https://drive.google.com/file/d/1igFJDyKMBAhxDiMVEZlrlvxVTslIDeP-/preview"
            width="640"
            height="480"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://drive.google.com/file/d/1PBu6qnbPFMouh0rAxv36zRnzeKLLRiLK/preview"
            width="640"
            height="480"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
