import React from 'react'
import { shallow } from 'enzyme'
import { ok } from 'assert'
import App from '../component/app'

describe('<App />', () => {
  it('<App /> コンポーネントのクラスが app である', () => {
    let wrapper = shallow(<App />)
    ok(wrapper.hasClass('app'))
  })

  it('Header コンポーネントが見つかる', () => {
    let wrapper = shallow(<App />)
    ok(wrapper.find('Header'))
  })

  it('UserList コンポーネントが見つかる', () => {
    let wrapper = shallow(<App />)
    ok(wrapper.find('UserList'))
  })

  it('UserList コンポーネントの list プロパティに配列が与えられている', () => {
    let wrapper = shallow(<App />)
    let userList = wrapper.find('UserList')
    ok(Array.isArray(userList.prop('list')))
  })
})

/* global describe it */
