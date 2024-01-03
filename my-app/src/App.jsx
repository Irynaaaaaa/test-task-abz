import Header from './sections/Header/Header'
import SignUpBanner from './sections/SignUpBanner/SignUpBanner'
import UserRegistration from './sections/UserRegistration/UserRegistration'
import Users from './sections/Users/Users'

function App() {
  return (
    <div className="app">
      <Header />
      <SignUpBanner />
      <Users />
      <UserRegistration />
    </div>
  )
}

export default App
