import './InputField.css'

function InputField({ 
  label, 
  value, 
  onChange, 
  type = "text", 
  maxLength = 100, 
  placeholder = "", 
  required = false,
  className = "",
  showCharCount = false
}) {
  
  const handleChange = (e) => {
    let inputValue = e.target.value
    
    // For date inputs, ensure year is max 4 digits
    if (type === "date" && inputValue) {
      const dateParts = inputValue.split('-')
      if (dateParts[0] && dateParts[0].length > 4) {
        dateParts[0] = dateParts[0].substring(0, 4)
        inputValue = dateParts.join('-')
      }
    }
    
    if (onChange) {
      onChange(inputValue)
    }
  }

  return (
    <div className={`input-field ${className} ${type === 'date' ? 'show-label' : ''}`}>
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          className="input-textarea"
          value={value || ''}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={4}
        />
      ) : (
        <input
          className="input-text"
          type={type}
          value={value || ''}
          onChange={handleChange}
          maxLength={type === "date" ? undefined : maxLength}
          placeholder={placeholder}
        />
      )}
      
      {showCharCount && (
        <div className="input-footer">
          <small className="char-count">
            {(value || '').length}/{maxLength}
          </small>
        </div>
      )}
    </div>
  )
}

export default InputField