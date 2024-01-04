import * as Yup from 'yup'

const phoneRegex = /^[+]{0,1}380([0-9]{9})$/
const emailRegex =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

export const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(60).required().label('Name'),
  email: Yup.string()
    .min(2)
    .max(100)
    .test('email', 'email format is invalid', (value = '') => {
      return emailRegex.test(value)
    })
    .required()
    .label('Email'),
  phone: Yup.string()
    .test('phone', 'Phone number format is invalid', (value = '') => {
      return phoneRegex.test(value)
    })
    .required(),
  photo: Yup.mixed().nullable(true).required().label('Photo'),
})
