export const getManufacturerNameFromUrl = location => (location &&
  location.pathname
  ? location.pathname.split('/candies/').pop()
  : ''
)

export const retrieveCandies = async (locations) => {
  const manufacturerName = getManufacturerNameFromUrl(location)

  if (!manufacturerName) return { details: {}, candies: [] }

  const { id, name, country, candies } = await
  fetchCandiesForManufacturer(manufacturerName)
  
}
