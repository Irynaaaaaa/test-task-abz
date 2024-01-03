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
      inputRef,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className="input-wrapper">
        <label htmlFor={label}>{label}</label>
        <input
          className="base-input"
          type={type}
          id={label}
          name={name}
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
