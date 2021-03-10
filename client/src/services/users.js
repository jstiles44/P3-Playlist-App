import api from './apiConfig'
import jwtDecode from "jwt-decode"

export const signUp = async (credentials) => {
  try {
    //making post call to the /sign-up route on the server. credentials will have the user info in the request body
    const response = await api.post('/sign-up', credentials)
    //store the servers response. it's a JWT unique to that user
    localStorage.setItem('token', response.data.token)
    //  return the decoded JWT, which has the user object in it. 
    const user = jwtDecode(response.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    //making post call to sign-in route on backend. credentials will be the user credentials in the request body
    const response = await api.post('/sign-in', credentials)
    //storing the servers response as a JWT unique to that user in localStorage
    localStorage.setItem('token', response.data.token)
    const user = jwtDecode(response.data.token)
    //returning the decoded JWT which contains the user object
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async (user) => {
  try {
    localStorage.clear()
    return true
  } catch (error) {
    throw error
  }
}


//verifying that this user exists in our system. then it set's the "user state in app.jsx to the response.data of the verify route on the backend. 
export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const response = await api.get('/verify')
    return response.data
  }
  return false
}


export const editUser = async(id, user) => {
  try {
    const response = await api.put(`/${id}`, user)
    return response.data
  } catch (error) {
    throw error
  }
}