import { useState } from 'react'
import TextClipperWithTooltip from '../../components/TextClipperWithTooltip/TextClipperWithTooltip'
import defaultPhoto from './../../assets/icons/user-photo-default.svg'

const User = ({ userData }) => {
  const [isError, setIsError] = useState(false)

  const { email, name, phone, photo, position } = userData

  return (
    <li className="user-card">
      <img
        src={isError ? defaultPhoto : photo}
        alt="user"
        className="user-card-photo"
        onError={() => setIsError(true)}
      />
      <TextClipperWithTooltip
        id="user-card-name"
        content={name}
        className="user-card-name"
        noArrow
      />
      <div className="user-card-info">
        <TextClipperWithTooltip
          id="user-card-position"
          content={position}
          noArrow
        />
        <TextClipperWithTooltip id="user-card-email" content={email} noArrow />
        <span>{phone}</span>
      </div>
    </li>
  )
}

export default User
