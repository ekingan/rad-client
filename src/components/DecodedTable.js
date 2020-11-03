import React from 'react'
import DecodedRow from './DecodedRow'

const DecodedTable = (props) => {
  const { processedSerialNumbers } = props
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Bike Model</th>
            <th>Model Year</th>
            <th>Model Month</th>
            <th>Year Manufactured</th>
            <th>Factory</th>
            <th>Version</th>
            <th>Unique Code</th>
          </tr>
        </thead>
        <tbody>
          { processedSerialNumbers.map(number => <DecodedRow code={number} />) }
        </tbody>
      </table>
    </>
  )
}
export default DecodedTable