import defaultPhoto from './../../assets/icons/user-photo-default.svg'

const User = ({ userData }) => {
  const { email, name, phone, photo, position } = userData

  return (
    <li className="user-card">
      <img src={photo || defaultPhoto} alt="user" className="user-card-photo" />
      <span className="user-card-name">{name}</span>
      <div className="user-card-info">
        <span>{position}</span>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </li>
  )
}

export default User
