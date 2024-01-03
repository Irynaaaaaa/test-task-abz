import { useField, useFormikContext } from 'formik'
import { useRef } from 'react'

const FormikPhotoUploaderField = (props) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  const { value, ...rest } = field

  const inputRef = useRef(null)

  const openFileExplorer = () => {
    inputRef?.current?.click()
  }

  return (
    <div className="formik-upload-photo">
      <div className="upload-photo-pseudo-field">
        <div className="upload-photo-pseudo-button" onClick={openFileExplorer}>
          Upload
        </div>
        <span>{field.value ? field.value.name : 'Upload your photo'}</span>
      </div>
      <input
        {...rest}
        {...props}
        type="file"
        accept="image/jpeg, image/jpg"
        ref={inputRef}
        onChange={(event) => {
          setFieldValue(field.name, event.currentTarget.files[0])
        }}
      />

      <p className="helper-text error-text">{''}</p>
    </div>
  )
}

export default FormikPhotoUploaderField
