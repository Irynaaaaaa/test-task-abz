import { forwardRef } from 'react'

const Input = forwardRef(
  (
    {
      label = '',
      placeholder = '',
      errorText = '',
      helperText = '',
      value,
      type = 'text',
      name = '',
      onChange = () => null,
      error,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className="input-wrapper">
        <label htmlFor={label}>{label}</label>
        <input
          className={`base-input ${error ? 'base-input-error' : ''}`}
          type={type}
          id={label}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...restProps}
        />
        {error ? (
          <p className="helper-text error-text">{errorText}</p>
        ) : (
          <p className="helper-text">{helperText}</p>
        )}
      </div>
    )
  }
)
export default Input
