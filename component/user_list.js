import React from 'react'

const UserList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },

  render () {
    let {list} = this.props
    return (
      <ul>
        {
          list.map(user => <li key={user}>{user}</li>)
        }
      </ul>
    )
  }
})

export default UserList
