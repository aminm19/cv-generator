import './Button.css'

function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color }} className="custom-button">
      {text}
    </button>
  )
}

export default Button
