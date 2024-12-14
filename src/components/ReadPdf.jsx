import React from "react";
import file from "../assets/file.pdf";

function PdfViewer() {

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={`https://docs.google.com/gview?url=${file}&embedded=true`}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="PDF Viewer"
      />
    </div>
  );
}

export default PdfViewer;
