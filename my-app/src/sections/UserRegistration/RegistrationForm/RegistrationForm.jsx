import { Form, Formik } from 'formik'
import Button from '../../../components/Button/Button'
import { FormikField } from '../../../components/Input/FormikField'
import { validationSchema } from './validation'
import FormikPhotoUploaderField from '../FormikPhotoUploader/FormikPhotoUploader'
import FormikPositionsList from '../FormikPositionsList/FormikPositionsList'
import { postUser } from '../../../api'
import { useQueryClient, useMutation } from 'react-query'

const RegistrationForm = () => {
  const queryClient = useQueryClient()

  const submitForm = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users'])
    },
    onError: (err) => {
      console.log(err)
    },
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        position_id: 1,
        photo: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(v, { resetForm }) => {
        submitForm.mutate(v)
        resetForm()
      }}
    >
      {({ errors, dirty }) => {
        return (
          <Form className="registration-form">
            <div className="registration-form-inputs-section">
              <FormikField placeholder="Your name" name="name" />
              <FormikField placeholder="Email" name="email" />
              <FormikField
                placeholder="Phone"
                name="phone"
                helperText="+38 (XXX) XXX - XX - XX"
              />
            </div>

            <FormikPositionsList name="position_id" />

            <FormikPhotoUploaderField name="photo" />

            <Button
              title="Sign up"
              disabled={!dirty || Object.keys(errors).length}
              type="submit"
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
