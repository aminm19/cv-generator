import { useState } from 'react';
import { generatePDF, previewPDF } from '../utils/pdfGenerator';
import './PreviewModal.css';

const PreviewModal = ({ isOpen, onClose, cvData }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      await generatePDF(cvData);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreviewPDF = async () => {
    setIsGenerating(true);
    try {
      await previewPDF(cvData);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="preview-modal-overlay" onClick={onClose}>
      <div className="preview-modal-content" onClick={e => e.stopPropagation()}>
        <div className="preview-modal-header">
          <h2>CV Preview & Download</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="preview-modal-body">
          <div className="preview-info">
            <h3>Ready to generate your professional CV!</h3>
            <p>Your CV will be generated as a clean, professional PDF based on the information you've entered.</p>
            
            <div className="cv-summary">
              <div className="summary-item">
                <strong>Name:</strong> {cvData.personal?.fullName || 'Not provided'}
              </div>
              <div className="summary-item">
                <strong>Job Title:</strong> {cvData.personal?.jobTitle || 'Not provided'}
              </div>
              <div className="summary-item">
                <strong>Experience Entries:</strong> {cvData.experience?.length || 0}
              </div>
              <div className="summary-item">
                <strong>Education Entries:</strong> {cvData.education?.length || 0}
              </div>
            </div>
          </div>
        </div>
        
        <div className="preview-modal-footer">
          <button 
            className="preview-button"
            onClick={handlePreviewPDF}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Preview PDF'}
          </button>
          
          <button 
            className="download-button"
            onClick={handleDownloadPDF}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
          
          <button className="cancel-button" onClick={onClose}>
            Back to Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;