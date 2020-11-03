import React from 'react'
import { formatData } from '../utils'

const DecodedRow = (props) => {
  const { model, year, month, yearManufactured, factory, version, unique } = props.code
  return (
    <tr key={unique}>
      <td>{formatData(model)}</td>
      <td>{formatData(year)}</td>
      <td>{formatData(month)}</td>
      <td>{formatData(yearManufactured)}</td>
      <td>{formatData(factory)}</td>
      <td>{formatData(version)}</td>
      <td>{formatData(unique)}</td>
    </tr>
  )
}

export default DecodedRow