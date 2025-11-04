import { pdf } from '@react-pdf/renderer';
import CVDocument from '../pdf/CVDocument';

export const generatePDF = async (cvData) => {
  try {
    // Generate the PDF blob
    const blob = await pdf(<CVDocument cvData={cvData} />).toBlob();
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Generate filename based on name or default
    const fileName = cvData.personal?.fullName 
      ? `${cvData.personal.fullName.replace(/\s+/g, '_')}_Resume.pdf`
      : 'Resume.pdf';
    
    link.href = url;
    link.download = fileName;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};

export const previewPDF = async (cvData) => {
  try {
    // Generate the PDF blob for preview
    const blob = await pdf(<CVDocument cvData={cvData} />).toBlob();
    const url = URL.createObjectURL(blob);
    
    // Open in new tab for preview
    window.open(url, '_blank');
    
    // Note: URL cleanup happens when tab closes
    return url;
  } catch (error) {
    console.error('Error previewing PDF:', error);
    alert('Error previewing PDF. Please try again.');
  }
};