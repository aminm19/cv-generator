import './CVEditor.css'
import PersonalInfoSection from './PersonalInfoSection'
import SummarySection from './SummarySection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import { useState, useEffect } from 'react'

function CVEditor({ onDataChange }) {
  const [cvData, setCvData] = useState({
    personal: { fullName: '', jobTitle: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '' },
    summary: '',
    experience: [{ id: 1, company: '', position: '', location: '', startDate: '', endDate: '', current: false, description: '' }],
    education: [{ id: 1, school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }]
  })

  // Pass the setCvData function up to parent when component mounts
  useEffect(() => {
    if (onDataChange) {
      onDataChange(setCvData)
    }
  }, [onDataChange])

  return (
    <div className="cv-editor">
      <div className="cv-form">
        <PersonalInfoSection 
          data={cvData.personal} 
          onChange={(newData) => setCvData({...cvData, personal: newData})} 
        />
        <SummarySection 
          data={cvData.summary} 
          onChange={(newData) => setCvData({...cvData, summary: newData})} 
        />
        <ExperienceSection 
          data={cvData.experience} 
          onChange={(newData) => setCvData({...cvData, experience: newData})} 
        />
        <EducationSection 
          data={cvData.education} 
          onChange={(newData) => setCvData({...cvData, education: newData})} 
        />
      </div>
    </div>
  )
}

export default CVEditor