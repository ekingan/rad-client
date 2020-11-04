import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DecodedRow from './DecodedRow'

Enzyme.configure({ adapter: new Adapter() });

describe('DecodedRow', () => {
  const number = {
    codes: [
    {
      model: 'RadRover',
      year: '2019',
      month: 'February',
      yearManufactured: '19',
      factory: 'FactoryV',
      version: '',
      unique: '101713'
    }]
  }

  it('renders the component', () => {
    const wrapper = shallow(<DecodedRow code={number} />)
    expect(() => wrapper).not.toThrow()
  })
})