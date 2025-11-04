import { useState } from 'react'
import InputField from './InputField'
import './PersonalInfoSection.css'

function PersonalInfoSection() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })

  const updateField = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <section className="cv-section">
      <h2 className="section-title">Personal Information</h2>
      
      <div className="section-content">
        <div className="input-row">
          <InputField
            label="Full Name"
            value={personalInfo.fullName}
            onChange={(value) => updateField('fullName', value)}
            maxLength={50}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="input-row">
          <InputField
            label="Email"
            type="email"
            value={personalInfo.email}
            onChange={(value) => updateField('email', value)}
            maxLength={100}
            placeholder="john.doe@email.com"
            required
          />
          
          <InputField
            label="Phone"
            type="tel"
            value={personalInfo.phone}
            onChange={(value) => updateField('phone', value)}
            maxLength={20}
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="input-row">
          <InputField
            label="Address"
            value={personalInfo.address}
            onChange={(value) => updateField('address', value)}
            maxLength={100}
            placeholder="123 Main Street"
          />
        </div>

        <div className="input-row">
          <InputField
            label="City"
            value={personalInfo.city}
            onChange={(value) => updateField('city', value)}
            maxLength={50}
            placeholder="New York"
          />
          
          <InputField
            label="State"
            value={personalInfo.state}
            onChange={(value) => updateField('state', value)}
            maxLength={20}
            placeholder="NY"
          />
          
          <InputField
            label="ZIP Code"
            value={personalInfo.zipCode}
            onChange={(value) => updateField('zipCode', value)}
            maxLength={10}
            placeholder="10001"
          />
        </div>
      </div>
    </section>
  )
}

export default PersonalInfoSection