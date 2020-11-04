import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '../constants'
import CodeTable from './CodeTable'

const ADD_CODE_MUTATION = gql`
  mutation AddCodeMutation ($name: String!, $code: String!, $type: String!) {
    addCode(name: $name, code: $code, type: $type) {
      id
      name
      code
      type
    }
  }
`

class CreateCode extends Component {
  state = {
    code: null,
    name: null,
    type: 'model',
    newRecord: {},
    errorMessage: '',
  }

  handleResponse = resp => {
    this.setState({ newRecord: resp })
    this.setState({code: '', name: '', type: ''})
  }

  handleError = error => {
    const errorMessage = String(error)
    this.setState({ errorMessage })
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    const { code, name, type, newRecord, errorMessage } = this.state
    const { codes } = this.props
    if (!authToken) return ( <div> You must log in to view this page </div> )
    return (
      <div>
        To add a new serial number code, select what type of code you are entering (bike model, year, or factory code), followed by the code, and the name.
        <div className="flex flex-column mt3">
          <select className="mb2" value={type} onChange={e => this.setState({ type: e.target.value })}>
            <option value="model">Bike Model</option>
            <option value="year">Year</option>
            <option value="factory">Factory</option>
          </select>
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="The proper name for this bike model, year, or factory"
          />
          <input
            className="mb2"
            value={code}
            onChange={e => this.setState({ code: e.target.value })}
            type="text"
            placeholder="The code used for this bike model, year, or factory"
          />
          </div>
        <Mutation
          mutation={ADD_CODE_MUTATION}
          variables={{ code, name, type }}
          onCompleted={res => this.handleResponse(res)}
          onError={error => this.handleError(error)}
          update={(store, { data: { addCode } }) =>
            this.props.updateStore(store, addCode)
          }
        >
          {addCodeMutation => <button className="button" onClick={addCodeMutation}>Submit</button>}
        </Mutation>
        { newRecord.addCode &&
          <div>
            You successfully saved a new {newRecord.addCode.type}, with a name {newRecord.addCode.name}, and a code {newRecord.addCode.code}.
          </div>
        }
        <div>{ errorMessage }</div>
        <CodeTable codes={codes} />
      </div>
    )
  }
}

export default CreateCode