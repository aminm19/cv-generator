import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import CVEditor from './components/CVEditor';
import PreviewModal from './components/PreviewModal';
import { generateSampleCV } from './utils/sampleData';

function App() {
  const [cvData, setCvData] = useState({
    personal: { fullName: '', jobTitle: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '' },
    summary: '',
    experience: [{ id: 1, company: '', position: '', location: '', startDate: '', endDate: '', current: false, description: '' }],
    education: [{ id: 1, school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }]
  });
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const handleGenerateRandomCV = () => {
    const randomCV = generateSampleCV();
    console.log("Sample CV data:", randomCV);
    setCvData(randomCV);
  };

  const handlePreview = () => {
    setIsPreviewModalOpen(true);
  };

  return (
    <div className="app">
      <div className="button-container">
        <Button text="Preview" color="#0d99ff" onClick={handlePreview} />
        <Button text="Generate Random CV" color="#ff6250" onClick={handleGenerateRandomCV} />
      </div>
      
      <CVEditor 
        cvData={cvData} 
        onDataChange={setCvData}
      />
      
      <PreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        cvData={cvData}
      />
    </div>
  );
}

export default App;
