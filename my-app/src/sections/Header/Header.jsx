import Button from '../../components/Button/Button'

import logo from '../../assets/icons/Logo.svg'

const Header = () => {
  const onUsersClick = () => (window.location.href = '#users_section')
  const onSignUpClick = () => (window.location.href = '#users_section')

  return (
    <header className="common-section-styles app-header">
      <img src={logo} alt="logo" />

      <div className="header-buttons">
        <Button title="Users" onClick={onUsersClick} />
        <Button title="Sign Up" onClick={onSignUpClick} />
      </div>
    </header>
  )
}

export default Header
