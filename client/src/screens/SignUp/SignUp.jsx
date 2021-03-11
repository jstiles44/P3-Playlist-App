import React, { useState } from 'react'
import './SignUp.css'
import { signUp, signIn } from '../../services/users'
import { useHistory } from "react-router-dom"
import Layout from "../../components/Shared/layout/Layout"

const SignUp = (props) => {

    const history = useHistory()

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: false,
        errorMsg: '',
      
    })
  

    const handleChange = event =>
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    const onSignUp = event => {
        event.preventDefault()
        const { setUser } = props

        signUp(form)
            .then(() => signIn(form))
            .then(user => setUser(user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                setForm({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
                })
            })
    }

    const renderError = () => {
        const toggleForm = form.isError ? 'danger' : ''
        if (form.isError) {
            return (
                <button className="sign-up-button" type="submit" className={toggleForm}>
                    {form.errorMsg}
                </button>
            )
        } else {
            return <button className="sign-up-button" type="submit">Sign Up</button>
        }
    }

    const { email, username, password, passwordConfirmation } = form

  return (
    <Layout>
      <div className="sign-up-body">
        <div className="form-container-up">
            <div className="sign-up">Sign Up</div>
          <form className="sign-up-form" onSubmit={onSignUp}>
                <div className="username-div">
                <label className="label">Username</label>
            <input
                    className="username"
                    required
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter username"
                    onChange={handleChange}
              />
            </div>
                <div className="email-div">
                <label className="label">Email</label>
            <input
                    className="email"
                    required
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={handleChange}
              />
            </div>
            <div className="password-div">
                <label className="label">Password</label>
            <input
                    className="password"
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
              />
            </div>
            <div className="password-confirmation-div">
                <label className="label">Confirm Password</label>
            <input
                    className="password-confirmation"
                    required
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="Confirm Password"
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

export default SignUp