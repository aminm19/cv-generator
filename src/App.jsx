import './App.css'
import Button from './components/Button'
import CVEditor from './components/CVEditor'
import { generateSampleCV } from './utils/sampleData'

function App() {
  let setCvDataRef = null // Store the setter function

  const handleDataChange = (setCvDataFunction) => {
    setCvDataRef = setCvDataFunction // Store the function
  }

  const handleGenerateRandomCV = () => {
    const randomCV = generateSampleCV()
    console.log("Sample CV data:", randomCV)
    
    if (setCvDataRef) {
      setCvDataRef(randomCV) // Use the stored function to update CV data
    }
  }

  return (
    <div className="app">
      <div className="button-container">
        <Button text="Preview" color="blue" />
        <Button text="Generate Random CV" color="green" onClick={handleGenerateRandomCV} />
      </div>
      <CVEditor onDataChange={handleDataChange} />
    </div>
  )
}

export default App
