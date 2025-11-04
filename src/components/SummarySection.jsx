import { useState } from 'react'
import InputField from './InputField'
import './SummarySection.css'

function SummarySection() {
  const [summary, setSummary] = useState('')

  return (
    <section className="cv-section">
      <h2 className="section-title">Professional Summary</h2>
      
      <div className="section-content">
        <InputField
          label="Summary"
          type="textarea"
          value={summary}
          onChange={setSummary}
          maxLength={500}
          placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
        />
        
        <div className="summary-tips">
          <small>💡 Tip: Keep it concise and focus on your most relevant qualifications</small>
        </div>
      </div>
    </section>
  )
}

export default SummarySection