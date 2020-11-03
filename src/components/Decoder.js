import React, { Component } from 'react'
import DecodedTable from './DecodedTable'
import { AUTH_TOKEN } from '../constants'
import { processSerialNumbers } from '../utils'

class Decoder extends Component {
  state = {
    serialNumbers: '',
    processedSerialNumbers: [],
   }

  handleSubmit = e => {
    e.preventDefault()
    const { serialNumbers } = this.state
    const { codes } = this.props
    const processedSerialNumbers = processSerialNumbers(codes, serialNumbers)
    this.setState({ processedSerialNumbers })
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    const { serialNumbers, processedSerialNumbers } = this.state

    if (!authToken) return ( <div> You must log in to view this page </div> )
    return (
      <div>
        <form className="pv3 ma2 center-ns" onSubmit={(e) => this.handleSubmit(e)}>
          <textarea
            className="textbox"
            value={serialNumbers}
            onChange={e => this.setState({ serialNumbers: e.target.value })}
            type="text"
            placeholder="enter a list of serial numbers to decode"
          />
          <input className="button" type="submit" value="Decode"/>
        </form>
        { processedSerialNumbers.length < 1 ? (
          <div className="pv3 ma2 center-ns"> No items to display </div>
          ) : ( <DecodedTable processedSerialNumbers={processedSerialNumbers}/> ) }
      </div>
    )
  }
}

export default Decoder