const Button = ({
  title,
  type = 'yellow',
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={`base-button base-button-${type}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
