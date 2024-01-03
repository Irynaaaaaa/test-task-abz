import React, { forwardRef } from 'react'
import { useField } from 'formik'
import Input from './Input'

export const FormikField = forwardRef(({ name, ...rest }, ref) => {
  const [field, meta] = useField(name || '')

  return (
    <Input
      {...field}
      error={meta.touched && Boolean(meta.error)}
      errorText={meta.touched && meta.error}
      {...rest}
      ref={ref}
    />
  )
})
