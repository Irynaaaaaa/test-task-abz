import { Form, Formik } from 'formik'
import Button from '../../../components/Button/Button'
import { FormikField } from '../../../components/Input/FormikField'
import { validationSchema } from './validation'
import FormikPhotoUploaderField from '../FormikPhotoUploader/FormikPhotoUploader'
import FormikPositionsList from '../FormikPositionsList/FormikPositionsList'

const RegistrationForm = () => {
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
      onSubmit={(v) => console.log(v)}
    >
      {({ values, errors, dirty }) => (
        <Form className="registration-form">
          <div className="registration-form-inputs-section">
            <FormikField
              value={values.name}
              placeholder="Your name"
              name="name"
            />
            <FormikField
              value={values.email}
              placeholder="Email"
              name="email"
            />
            <FormikField
              value={values.phone}
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
      )}
    </Formik>
  )
}

export default RegistrationForm
