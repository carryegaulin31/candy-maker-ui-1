export const getManufacturerNameFromUrl = location => (location &&
  location.pathname
  ? location.pathname.split('/candies/').pop()
  : ''
)

export const retrieveCandies = async (locations) => {
  const manufacturerName = getManufacturerNameFromUrl(location)
}
