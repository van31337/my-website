import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/PDFViewer.scss";

function PDFViewer({ url }) {
  return (
    <div className="pdf-viewer">
      <div className="pdf-actions">
        <a href={url} download className="pdf-action-btn">
          <FaDownload /> Download
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer" className="pdf-action-btn">
          <FaExternalLinkAlt /> Open in New Tab
        </a>
      </div>
      <div className="pdf-container">
        <object data={url} type="application/pdf" width="100%" height="100%">
          <div className="pdf-fallback">
            <p>Your browser doesn't support embedded PDFs.</p>
            <a href={url} className="pdf-download-link">
              <FaDownload /> Download Resume
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}

export default PDFViewer;
