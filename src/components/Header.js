import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap blue pv3 ph3">
        <div className="flex flex-fixed black">
          <div className="fw7 mr3">Rad Power Bikes</div>
          {authToken && (
            <Link to="/" className="ml1 no-underline black">
              Decode Serial Numbers
            </Link>
          )}
          {authToken && (
            <div className="flex">
              <div className="ml3">|</div>
              <Link to="/create" className="ml1 no-underline black">
                Add New Serial Code
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/login`)
              }}
            >
              Logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              Login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)