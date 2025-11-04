import './CVEditor.css'
import PersonalInfoSection from './PersonalInfoSection'
import SummarySection from './SummarySection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'

function CVEditor() {
  return (
    <div className="cv-editor">
      <div className="cv-form">
        <PersonalInfoSection />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  )
}

export default CVEditor