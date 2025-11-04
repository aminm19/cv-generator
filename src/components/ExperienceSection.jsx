import { useState } from 'react'
import InputField from './InputField'
import './ExperienceSection.css'

function ExperienceSection() {
  const [experienceEntries, setExperienceEntries] = useState([
    {
      id: 1,
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ])

  const updateExperience = (id, field, value) => {
    setExperienceEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    )
  }

  const toggleCurrent = (id) => {
    setExperienceEntries(prev => 
      prev.map(entry => 
        entry.id === id 
          ? { ...entry, current: !entry.current, endDate: !entry.current ? '' : entry.endDate }
          : entry
      )
    )
  }

  const addExperience = () => {
    const newId = Math.max(...experienceEntries.map(e => e.id)) + 1
    setExperienceEntries(prev => [...prev, {
      id: newId,
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }])
  }

  const removeExperience = (id) => {
    if (experienceEntries.length > 1) {
      setExperienceEntries(prev => prev.filter(entry => entry.id !== id))
    }
  }

  return (
    <section className="cv-section">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="section-content">
        {experienceEntries.map((experience) => (
          <div key={experience.id} className="experience-entry">
            <div className="entry-header">
              <h3>Experience Entry {experience.id}</h3>
              {experienceEntries.length > 1 && (
                <button 
                  type="button"
                  className="remove-btn"
                  onClick={() => removeExperience(experience.id)}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="input-row">
              <InputField
                label="Company"
                value={experience.company}
                onChange={(value) => updateExperience(experience.id, 'company', value)}
                maxLength={100}
                placeholder="Apple Inc."
                required
              />
              
              <InputField
                label="Position"
                value={experience.position}
                onChange={(value) => updateExperience(experience.id, 'position', value)}
                maxLength={100}
                placeholder="Software Engineer"
                required
              />
            </div>

            <div className="input-row">
              <InputField
                label="Location"
                value={experience.location}
                onChange={(value) => updateExperience(experience.id, 'location', value)}
                maxLength={100}
                placeholder="Cupertino, CA"
              />
            </div>

            <div className="input-row">
              <InputField
                label="Start Date"
                type="date"
                value={experience.startDate}
                onChange={(value) => updateExperience(experience.id, 'startDate', value)}
                required
              />
              
              {!experience.current && (
                <InputField
                  label="End Date"
                  type="date"
                  value={experience.endDate}
                  onChange={(value) => updateExperience(experience.id, 'endDate', value)}
                />
              )}
              
              <div className="checkbox-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={experience.current}
                    onChange={() => toggleCurrent(experience.id)}
                  />
                  Currently working here
                </label>
              </div>
            </div>

            <div className="input-row">
              <InputField
                label="Job Description"
                type="textarea"
                value={experience.description}
                onChange={(value) => updateExperience(experience.id, 'description', value)}
                maxLength={400}
                placeholder="Describe your key responsibilities, achievements, and technologies used..."
              />
            </div>
          </div>
        ))}
        
        <button type="button" className="add-btn" onClick={addExperience}>
          + Add Experience
        </button>
      </div>
    </section>
  )
}

export default ExperienceSection