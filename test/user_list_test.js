import React from 'react'
import { shallow } from 'enzyme'
import { ok } from 'assert'
import UserList from '../component/user_list'

describe('<UserList />', () => {
  it('props.list に配列を与えるとリストがレンダリングされる', () => {
    let users = ['Sato', 'Kato', 'Ito']
    let wrapper = shallow(<UserList list={users}/>)
    users.forEach(user => {
      ok(wrapper.contains(<li>{user}</li>))
    })
  })

  it('props.list に空の配列を与えてもレンダリングを失敗しない', () => {
    let users = []
    let wrapper = shallow(<UserList list={users}/>)
    ok(wrapper)
  })
})

/* global describe it */
