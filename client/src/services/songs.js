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


export const updateSong = async (id, song) => {
  try {
      const response = await api.put(`/songs/${id}`, song)
      return response.data
  } catch (error) {
      throw error
  }

}

export const createSong = async (song) => {
  try {
      const response = await api.put(`/songs`, song)
      return response.data
  } catch (error) {
      throw error
  }
}