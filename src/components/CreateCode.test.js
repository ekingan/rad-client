import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreateCode from './CreateCode'

Enzyme.configure({ adapter: new Adapter() });

describe('CreateCode', () => {
  const codes = [{
    code: 'R',
    name: 'RadRover',
    type: 'model'
  },
  {
    code: 'M',
    name: 'RadMini',
    type: 'model'
  }]

  it('renders the component', () => {
    const wrapper = shallow(<CreateCode codes={codes} />)
    expect(() => wrapper).not.toThrow()
  })
})