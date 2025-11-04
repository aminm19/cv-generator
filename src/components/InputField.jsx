import './InputField.css'

function InputField({ 
  label, 
  value, 
  onChange, 
  type = "text", 
  maxLength = 100, 
  placeholder = "", 
  required = false 
}) {
  
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className="input-field">
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
          maxLength={maxLength}
          placeholder={placeholder}
        />
      )}
      
      <div className="input-footer">
        <small className="char-count">
          {(value || '').length}/{maxLength}
        </small>
      </div>
    </div>
  )
}

export default InputField