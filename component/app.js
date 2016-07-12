import React from 'react'
import Header from './header'
import UserList from './user_list'

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <UserList />
      </div>
    )
  }
})

export default App
