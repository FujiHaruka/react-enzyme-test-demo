import React from 'react'
import Header from './header'
import UserList from './user_list'

const App = React.createClass({
  render () {
    let users = [
      'Sato', 'Kato', 'Ito'
    ]
    return (
      <div className='app'>
        <Header />
        <UserList list={users}/>
      </div>
    )
  }
})

export default App
