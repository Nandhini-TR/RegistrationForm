import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitSuccess: false,
    isFirstNameNonEmpty: false,
    firstName: '',
    lastName: '',
    isLastNameNonEmpty: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    const isFirstNameNonEmpty = firstName.trim() === ''
    const isLastNameNonEmpty = lastName.trim() === ''

    if (isFirstNameNonEmpty || isLastNameNonEmpty) {
      this.setState({isFirstNameNonEmpty, isLastNameNonEmpty})
    } else {
      this.setState({isSubmitSuccess: true, firstName: '', lastName: ''})
    }
  }

  onBlurFirstName = event => {
    const firstName = event.target.value
    this.setState({
      firstName,
      isFirstNameNonEmpty: firstName.trim() === '',
    })
  }

  onBlurLastName = event => {
    const lastName = event.target.value
    this.setState({
      lastName,
      isLastNameNonEmpty: lastName.trim() === '',
    })
  }

  onRenderHomePage = () => {
    this.setState({isSubmitSuccess: false})
  }

  renderSuccessfullForm = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="submit-description">Submitted Successfully</p>
      <button
        type="button"
        className="submit-again-button"
        onClick={this.onRenderHomePage}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitSuccess, isFirstNameNonEmpty, isLastNameNonEmpty} =
      this.state

    return (
      <div className="app-bg-container">
        <h1 className="main-heading">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          {isSubmitSuccess ? (
            this.renderSuccessfullForm()
          ) : (
            <div>
              <div className="name-container">
                <label htmlFor="firstname" className="name">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstname"
                  onBlur={this.onBlurFirstName}
                  placeholder="First name"
                  className="input-field"
                />
                {isFirstNameNonEmpty ? (
                  <p className="required">Required</p>
                ) : (
                  ''
                )}
              </div>
              <div className="name-container">
                <label htmlFor="lastname" className="name">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastname"
                  onBlur={this.onBlurLastName}
                  placeholder="Lasts name"
                  className="input-field"
                />
                {isLastNameNonEmpty ? <p className="required">Required</p> : ''}
              </div>
              <div className="submit-container">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
