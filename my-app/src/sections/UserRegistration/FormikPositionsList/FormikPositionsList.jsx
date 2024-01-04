import React from 'react'
import { useQuery } from 'react-query'
import { getPositions } from '../../../api'
import { useField, useFormikContext } from 'formik'

const FormikPositionsList = (props) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)

  const { data, isLoading } = useQuery({
    queryKey: ['positions'],
    queryFn: getPositions,
  })

  if (isLoading) return <span>Loading...</span>

  return (
    <div className="positions-list">
      <span>Select your position</span>
      <ul className="positions-container">
        {data.positions?.map(({ id, name }) => (
          <li key={id} className="positions-item">
            <input
              className="positions-radio-input"
              type="radio"
              value={id}
              id={id}
              checked={field.value === id}
              onChange={() => {
                setFieldValue(field.name, id)
              }}
            />
            <label htmlFor={id}>{name}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FormikPositionsList
