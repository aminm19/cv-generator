import './CVEditor.css'
import PersonalInfoSection from './PersonalInfoSection'
import SummarySection from './SummarySection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import { useEffect, useMemo } from 'react'

function CVEditor({ cvData, onDataChange }) {
  // Initialize with default structure if cvData is empty
  const currentData = useMemo(() => {
    return cvData && Object.keys(cvData).length > 0 ? cvData : {
      personal: { fullName: '', jobTitle: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '' },
      summary: '',
      experience: [{ id: 1, company: '', position: '', location: '', startDate: '', endDate: '', current: false, description: '' }],
      education: [{ id: 1, school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }]
    }
  }, [cvData])

  // Update parent when default data is used
  useEffect(() => {
    if ((!cvData || Object.keys(cvData).length === 0) && onDataChange) {
      onDataChange(currentData)
    }
  }, [cvData, onDataChange, currentData])

  const handleDataUpdate = (section, newData) => {
    if (onDataChange) {
      onDataChange({...currentData, [section]: newData})
    }
  }

  return (
    <div className="cv-editor">
      <div className="cv-form">
        <PersonalInfoSection 
          data={currentData.personal} 
          onChange={(newData) => handleDataUpdate('personal', newData)} 
        />
        <SummarySection 
          data={currentData.summary} 
          onChange={(newData) => handleDataUpdate('summary', newData)} 
        />
        <ExperienceSection 
          data={currentData.experience} 
          onChange={(newData) => handleDataUpdate('experience', newData)} 
        />
        <EducationSection 
          data={currentData.education} 
          onChange={(newData) => handleDataUpdate('education', newData)} 
        />
      </div>
    </div>
  )
}

export default CVEditor