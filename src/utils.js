export const codeMapping = codes => {
  const codeArray = codes.map(code => [code.code, code.name])
  return Object.fromEntries(codeArray)
}

export const processSerialNumbers = (codes, serialNumbers) => {
  const codeMap = codeMapping(codes)
  const serialArray = serialNumbers.replace(/[\n\r]/g, ',').replace(/\s/g, '').split(',')
  return serialArray.map(number => {
    const model = codeMap[number[0]]
    const year = codeMap[number[1]]
    const month = codeMap[number[2]]
    const yearManufactured = number.substring(3,5)
    const factory = codeMap[number[5]]
    const unique = number.slice(number.length - 6)
    const version = number.substring(6, number.length - 6)
    return { model, year, month, yearManufactured, factory, version, unique }
  })
}

export const formatData = data => data && data.length > 0 ? data : 'Not Found'