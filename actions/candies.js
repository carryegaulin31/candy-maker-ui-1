import axios from 'axios'

export default async (name) => {
  const { data } = await axios.get(`${API_BASE_url}/manufacturers/${name}`)

  return data
}
