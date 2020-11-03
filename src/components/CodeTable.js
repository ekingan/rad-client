import React from 'react'

const CodeTable = (props) => {
  const { codes } = props
  return (
    <table className="code-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { codes.map(code => {
            return (
              <tr key={code.id}>
                <td>{code.type}</td>
                <td>{code.code}</td>
                <td>{code.name}</td>
              </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default CodeTable