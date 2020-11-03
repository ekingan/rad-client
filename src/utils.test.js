import { codeMapping, processSerialNumbers } from './utils'

describe('utilities', () => {
  const codes = [
    {
      code: 'R',
      name: 'RadRover',
      type: 'model'
    },
    {
      code: 'M',
      name: 'RadMini',
      type: 'model'
    },
    {
      code: '1',
      name: 'January',
      type: 'month'
    },
    {
      code: '2',
      name: 'February',
      type: 'month'
    },
    {
      code: 'A',
      name: '2018',
      type: 'year'
    },
    {
      code: 'B',
      name: '2019',
      type: 'year'
    },
    {
      code: 'V',
      name: 'FactoryV',
      type: 'factory'
    },
  ]

  const decoded = [
    {
      model: 'RadRover',
      year: '2019',
      month: 'February',
      yearManufactured: '19',
      factory: 'FactoryV',
      version: '',
      unique: '101713'
    },
    {
      model: 'RadRover',
      year: '2019',
      month: 'February',
      yearManufactured: '19',
      factory: 'FactoryV',
      version: '',
      unique: '101561'
    },
    {
      model: 'RadMini',
      year: '2018',
      month: 'January',
      yearManufactured: '18',
      factory: undefined,
      version: '',
      unique: '101700'
    },
  ]

  describe('codeMapping', () => {
    it('creates a key value pair with the code as the key and the name as the value', () => {
      expect(codeMapping(codes)).toStrictEqual({'1': 'January', '2': 'February', 'A': '2018', 'B': '2019', 'V': 'FactoryV', 'M': 'RadMini', 'R': 'RadRover'})
    })
  })

  describe('processSerialNumbers', () => {
    it('returns an object with the names that correspond to the codes in a single serial number', () => {
      expect(processSerialNumbers(codes, 'RB219V101713')).toStrictEqual([{
        model: 'RadRover',
        year: '2019',
        month: 'February',
        yearManufactured: '19',
        factory: 'FactoryV',
        version: '',
        unique: '101713'
      }])
    })

    it('returns an object that decodes multiple serial numbers separated by commas', () => {
      expect(processSerialNumbers(codes, 'RB219V101713, RB219V101561, MA118J101700')).toStrictEqual(decoded)
    })

    it('returns an object that decodes multiple serial numbers on new lines or with white space', () => {
      expect(processSerialNumbers(codes, 'RB219V101713\n RB219V101561\r MA118J101700   ')).toStrictEqual(decoded)
    })

    it('returns a unique ID that is 6 digits', () => {
      const processed = processSerialNumbers(codes, 'RB219V101713111111')
      expect(processed[0].unique).toHaveLength(6)
      expect(processed[0].unique).toStrictEqual('111111')
    })

    it('returns a version number, defined between the factory code and unique ID', () => {
      const processed = processSerialNumbers(codes, 'RB219V333111111')
      expect(processed[0].version).toStrictEqual('333')
    })
  })
})


