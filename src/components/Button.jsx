import './Button.css'

function Button({ text, color, onClick }) {
  
  return (
    <button 
      style={{ backgroundColor: color }} 
      className="custom-button" 
      onClick={() => {
        if (onClick) onClick()
      }}
    >
      {text}
    </button>
  )
}

export default Button
