import { useField } from 'formik'
import Input from './Input'

export const FormikField = (props) => {
  const [field, meta] = useField(props)

  return (
    <Input
      {...field}
      error={meta.touched && Boolean(meta.error)}
      errorText={meta.touched && meta.error}
      {...props}
    />
  )
}
