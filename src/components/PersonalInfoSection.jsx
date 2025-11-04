import InputField from './InputField'
import './PersonalInfoSection.css'

function PersonalInfoSection({ data = {}, onChange }) {
  // Use props instead of local state
  const personalInfo = {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    ...data // Override defaults with passed data
  }

  const updateField = (field, value) => {
    if (onChange) {
      onChange({
        ...personalInfo,
        [field]: value
      })
    }
  }

  return (
    <header className="resume-header">
      <div className="name-section">
        <input
          className="name-input"
          value={personalInfo.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
          placeholder="Name"
          maxLength={50}
        />
        <input
          className="job-title-input"
          value={personalInfo.jobTitle}
          onChange={(e) => updateField('jobTitle', e.target.value)}
          placeholder="Your Professional Title"
          maxLength={50}
        />
      </div>
      
      <div className="contact-info">
        <div className="contact-row">
          <input
            className="contact-input"
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="123-456-7890"
            maxLength={20}
          />
          <input
            className="contact-input"
            type="email"
            value={personalInfo.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="youremail@example.com"
            maxLength={50}
          />
        </div>
        
        <div className="contact-row">
          <input
            className="contact-input address-input"
            value={personalInfo.address}
            onChange={(e) => updateField('address', e.target.value)}
            placeholder="linkedin.com/in/yourprofile"
            maxLength={50}
          />
          <input
            className="contact-input location-input"
            value={`${personalInfo.city}${personalInfo.city && personalInfo.state ? ', ' : ''}${personalInfo.state}`}
            onChange={(e) => {
              const parts = e.target.value.split(', ')
              updateField('city', parts[0] || '')
              updateField('state', parts[1] || '')
            }}
            placeholder="Your Location"
            maxLength={50}
          />
        </div>
      </div>
    </header>
  )
}

export default PersonalInfoSection