import fetchManufacturers from '../actions/manufacturers'

// eslint-disable-next-line max-len
export const filterManufacturers = (list, term) => list.filter(manufacturer => manufacturer.name.toLowerCase().includes(term.toLowerCase()))

export const retrieveManufacturers = async () => {
  const manufacturers = await fetchManufacturers()
  return manufacturers
}
