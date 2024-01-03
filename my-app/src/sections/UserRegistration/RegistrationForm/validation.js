import * as Yup from 'yup'

const phoneRegex = /^[+]{0,1}380([0-9]{9})$/

export const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().label('Email'),
  phone: Yup.string()
    .test('phone', 'Phone number format is invalid', (value = '') => {
      return phoneRegex.test(value)
    })
    .required(),
  photo: Yup.mixed().nullable(true).required().label('Photo'),
})
