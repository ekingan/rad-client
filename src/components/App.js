import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Decoder from './Decoder'
import CreateCode from './CreateCode'
import Header from './Header'
import Login from './Login'

const CODES_QUERY = gql`
  {
    codes {
      id
      code
      name
      type
    }
  }
`

const updateStore = (store, addCode) => {
  const codes = store.readQuery({ query: CODES_QUERY})
  const updated = codes.codes.unshift(addCode)
  store.writeQuery({ query: CODES_QUERY, updated})
}

const App = () => {
  return (
    <Query query={CODES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching data ...</div>
        if (error) {
          return <div>There was an error loading this page</div>
        }

        const { codes } = data
        return (
          <div className="center w85">
            <Header />
            <div className="ph3 pv1">
              <Switch>
                <Route exact path="/" render={props =>
                  (<Decoder {...props} codes={codes}/>)
                }/>
                <Route exact path="/create" render={props =>
                  (<CreateCode {...props} updateStore={updateStore} codes={codes}/>)
                }/>
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        )
      }}
    </Query>
  )
}
export default App