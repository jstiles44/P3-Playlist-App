import api from './apiConfig'

export const getSongs = async () => {
  try {
    const response = await api.get('/songs')
    return response.data
  } catch (error) {
throw error
  }
}

export const getSong = async (id) => {
  try {
    const response = await api.get(`/songs/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

