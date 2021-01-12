import fetchCandiesForManufacturer from '../actions/products'

export const getManufacturerNameFromUrl = location => (location &&
  location.pathname
  ? location.pathname.split('/candies/').pop()
  : ''
)

export const retrieveCandies = async (location) => {
  const manufacturerName = getManufacturerNameFromUrl(location)

  if (!manufacturerName) return { details: {}, candies: [] }

  const { id, name, country, candies } = await
  fetchCandiesForManufacturer(manufacturerName)

  if (!id || !name || !country || !candies) {
    return {
      details: {},
      candies:
      [],
    }
  }
  return { candies, details: { id, name, country } }
}
