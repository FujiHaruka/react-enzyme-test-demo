import React from 'react'
import { shallow } from 'enzyme'
import { equal, ok } from 'assert'
import App from '../component/app'

describe('<App />', () => {
  it('Header コンポーネントが見つかる', () => {
    const wrapper = shallow(<App />)
    ok(wrapper.find('Header'))
  })

  it('UserList コンポーネントが見つかる', () => {
    const wrapper = shallow(<App />)
    ok(wrapper.find('UserList'))
  })
})

/* global describe it */
