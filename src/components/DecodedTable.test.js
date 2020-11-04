import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DecodedTable from './DecodedTable'

Enzyme.configure({ adapter: new Adapter() });

describe('DecodedTable', () => {
  const processedSerialNumbers = [
    {
      model: 'RadRover',
      year: '2019',
      month: 'February',
      yearManufactured: '19',
      factory: 'FactoryV',
      version: '',
      unique: '101713'
    }]

  it('renders the component', () => {
    const wrapper = shallow(<DecodedTable processedSerialNumbers={processedSerialNumbers} />)
    expect(() => wrapper).not.toThrow()
  })
})