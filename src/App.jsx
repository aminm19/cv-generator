import './App.css'
import Button from './components/Button'
import CVEditor from './components/CVEditor'

function App() {

  return (
    <div className="app">
      <div className="button-container">
        <Button text="Preview" color="blue" />
        <Button text="Generate Random CV" color="green" />
      </div>
      <CVEditor />
    </div>
  )
}

export default App
