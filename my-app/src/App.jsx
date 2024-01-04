import { useQuery } from 'react-query'
import Header from './sections/Header/Header'
import SignUpBanner from './sections/SignUpBanner/SignUpBanner'
import UserRegistration from './sections/UserRegistration/UserRegistration'
import Users from './sections/Users/Users'
import { getToken } from './api'

function App() {
  const { data } = useQuery({
    queryKey: ['token'],
    queryFn: getToken,
  })

  localStorage.setItem('token', data?.token)

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
