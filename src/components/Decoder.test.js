import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Decoder from './Decoder'

Enzyme.configure({ adapter: new Adapter() });

describe('Decoder', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Decoder />)
    expect(() => wrapper).not.toThrow()
  })
})