import InputField from './InputField'
import './ExperienceSection.css'

function ExperienceSection({ data = [], onChange }) {
  // Use data array or default to one empty entry
  const experienceEntries = data.length > 0 ? data : [{
    id: 1,
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  }]

  const updateExperience = (id, field, value) => {
    if (onChange) {
      const updatedEntries = experienceEntries.map(entry => 
        entry.id === id ? { ...entry, [field]: value } : entry
      )
      onChange(updatedEntries)
    }
  }

  const toggleCurrent = (id) => {
    if (onChange) {
      const updatedEntries = experienceEntries.map(entry => 
        entry.id === id 
          ? { ...entry, current: !entry.current, endDate: !entry.current ? '' : entry.endDate }
          : entry
      )
      onChange(updatedEntries)
    }
  }

  const addExperience = () => {
    if (onChange) {
      const newId = Math.max(...experienceEntries.map(e => e.id)) + 1
      const newEntry = {
        id: newId,
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
      onChange([...experienceEntries, newEntry])
    }
  }

  const removeExperience = (id) => {
    if (experienceEntries.length > 1 && onChange) {
      const filteredEntries = experienceEntries.filter(entry => entry.id !== id)
      onChange(filteredEntries)
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
                label="Position"
                value={experience.position}
                onChange={(value) => updateExperience(experience.id, 'position', value)}
                maxLength={100}
                placeholder="Front-end Developer"
                required
                className="primary"
              />
              
              <InputField
                label="Company"
                value={experience.company}
                onChange={(value) => updateExperience(experience.id, 'company', value)}
                maxLength={100}
                placeholder="ABC Company"
                required
                className="secondary"
              />
            </div>

            <div className="input-row">
              <InputField
                label="Location"
                value={experience.location}
                onChange={(value) => updateExperience(experience.id, 'location', value)}
                maxLength={100}
                placeholder="New York"
                className="secondary"
              />
            </div>

            <div className="input-row date-row">
              <InputField
                label="Start Date"
                type="date"
                value={experience.startDate}
                onChange={(value) => updateExperience(experience.id, 'startDate', value)}
                required
                className="secondary"
              />
              
              {!experience.current && (
                <InputField
                  label="End Date"
                  type="date"
                  value={experience.endDate}
                  onChange={(value) => updateExperience(experience.id, 'endDate', value)}
                  className="secondary"
                />
              )}
            </div>

            <div className="input-row">
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
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                className="tertiary"
                showCharCount={true}
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