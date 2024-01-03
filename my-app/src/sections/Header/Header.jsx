import Button from '../../components/Button/Button'

import logo from '../../assets/icons/Logo.svg'
import { onSignUpNavigation, onUsersNavigation } from '../../constants'

const Header = () => {
  return (
    <header className="common-section-styles app-header">
      <img src={logo} alt="logo" />

      <div className="header-buttons">
        <Button title="Users" onClick={onUsersNavigation} />
        <Button title="Sign Up" onClick={onSignUpNavigation} />
      </div>
    </header>
  )
}

export default Header
