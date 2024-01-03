const Button = ({
  title,
  color = 'yellow',
  disabled = false,
  onClick = () => null,
  ...restProps
}) => {
  return (
    <button
      className={`base-button base-button-${color}`}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {title}
    </button>
  )
}

export default Button
