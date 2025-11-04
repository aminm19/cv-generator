import { useState } from 'react'
import InputField from './InputField'
import './EducationSection.css'

function EducationSection() {
  const [educationEntries, setEducationEntries] = useState([
    {
      id: 1,
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }
  ])

  const updateEducation = (id, field, value) => {
    setEducationEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    )
  }

  const addEducation = () => {
    const newId = Math.max(...educationEntries.map(e => e.id)) + 1
    setEducationEntries(prev => [...prev, {
      id: newId,
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }])
  }

  const removeEducation = (id) => {
    if (educationEntries.length > 1) {
      setEducationEntries(prev => prev.filter(entry => entry.id !== id))
    }
  }

  return (
    <section className="cv-section">
      <h2 className="section-title">Education</h2>
      
      <div className="section-content">
        {educationEntries.map((education) => (
          <div key={education.id} className="education-entry">
            <div className="entry-header">
              <h3>Education Entry {education.id}</h3>
              {educationEntries.length > 1 && (
                <button 
                  type="button"
                  className="remove-btn"
                  onClick={() => removeEducation(education.id)}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="input-row">
              <InputField
                label="School/University"
                value={education.school}
                onChange={(value) => updateEducation(education.id, 'school', value)}
                maxLength={100}
                placeholder="University of California"
                required
              />
            </div>

            <div className="input-row">
              <InputField
                label="Degree"
                value={education.degree}
                onChange={(value) => updateEducation(education.id, 'degree', value)}
                maxLength={50}
                placeholder="Bachelor of Science"
              />
              
              <InputField
                label="Field of Study"
                value={education.field}
                onChange={(value) => updateEducation(education.id, 'field', value)}
                maxLength={50}
                placeholder="Computer Science"
              />
            </div>

            <div className="input-row">
              <InputField
                label="Start Date"
                type="date"
                value={education.startDate}
                onChange={(value) => updateEducation(education.id, 'startDate', value)}
              />
              
              <InputField
                label="End Date"
                type="date"
                value={education.endDate}
                onChange={(value) => updateEducation(education.id, 'endDate', value)}
              />
              
              <InputField
                label="GPA (Optional)"
                value={education.gpa}
                onChange={(value) => updateEducation(education.id, 'gpa', value)}
                maxLength={10}
                placeholder="3.8/4.0"
              />
            </div>
          </div>
        ))}
        
        <button type="button" className="add-btn" onClick={addEducation}>
          + Add Education
        </button>
      </div>
    </section>
  )
}

export default EducationSection