import React, { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from "react-router-dom"
import Layout from "../../components/Shared/layout/Layout"
import { getPlaylist } from "../../services/users"


const SignIn = (props) => {

  const history = useHistory()

  const [form, setForm] = useState({
      username: '',
      password: '',
      isError: false,
      errorMsg: ''
  })

  const handleChange = event => {
      setForm({
          ...form,
          [event.target.name]: event.target.value
      })
  }

  const onSignIn = event => {
      event.preventDefault()

      const { setUser } = props

      signIn(form)
          .then(user => {
            setUser(user)
            return user
          })
      .then( async (user) => {
        const playlist = await getPlaylist(user.id)
        props.setPlaylist(playlist)
        })
          .then(() => history.push('/'))
          .catch(error => {
              console.error(error)
              setForm({
                  isError: true,
                  errorMsg: 'Invalid Credentials',
                  username: '',
                  password: ''
              })
          })
  }

  const renderError = () => {
      const toggleForm = form.isError ? 'danger' : ''
      if (form.isError) {
          return (
              <button className="sign_in_button_slide sign_in_slide_right" type="submit" className={toggleForm}>
                  {form.errorMsg}
              </button>
          )
      } else {
          return <button className="sign_in_button_slide sign_in_slide_right" type="submit">Sign In</button>
      }
  }

  const { username, password } = form

  return (
   
    <Layout user={props.user}>
       <div className="sign-in-body">
      <div className="form-container">
          <div className="sign-in">Sign In</div>
          <form className="sign-in-form" onSubmit={onSignIn}>
            <div className="username-div">
              <label className="username-label">Username</label>
            <input
                  className="sign-in-username"
                  required
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter Username"
                  onChange={handleChange}
              />
            </div>
            <div className="password-div">
              <label className="password-label">Password</label>
            <input
                  className="sign-in-password"
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
              />
              </div>
              {renderError()}
          </form>
      </div>
      </div>
      </Layout>
     
  )
}

export default SignIn