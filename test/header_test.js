import React from 'react'
import { shallow } from 'enzyme'
import { ok } from 'assert'
import Header from '../component/header'

describe('<Header />', () => {
  it('きちんとレンダリングされる', () => {
    let wrapper = shallow(<Header />)
    ok(wrapper)
  })
})

/* global describe it */
