import Button from '../../components/Button/Button'
import { onSignUpNavigation } from '../../constants'

const SignUpBanner = () => {
  return (
    <section className="sign-up-banner">
      <div className="sign-up-banner-content">
        <h1>Test assignment for front-end developer</h1>

        <span className="sign-up-banner-content-text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </span>
        <Button title="Sign Up" onClick={onSignUpNavigation} />
      </div>
    </section>
  )
}

export default SignUpBanner
