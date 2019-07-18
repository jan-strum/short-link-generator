import React from 'react'
import axios from 'axios'
import NewLink from './NewLink'

export default class CreateNewLink extends React.Component {
  constructor() {
    super()
    this.state = {
      targetUrl: '',
      newLink: {}
    }
  }

  postLink = async () => {
    const { LINKS_URL } = this.props
    const url = this.state.targetUrl
    const { data } = await axios.post(LINKS_URL, { url })

    return data
  }
  handleChange = event => {
    this.setState({ targetUrl: event.target.value })
  }
  handleSubmit = async e => {
    e.preventDefault()

    if (!this.state.targetUrl.length) {
      this.alertEmptyInput()
      return
    }

    const data = await this.postLink()
    console.log(data)
    if (!data.url) {
      // If the short link was not successfully created,
      this.alertInvalidInput(data) // then trigger an alert with the error messages in the data variable.
    } else {
      this.setState({
        targetUrl: '',
        newLink: data
      })
    }

    this.props.getData()
  }
  alertEmptyInput = () => {
    window.alert('This field may not be blank.')
  }
  alertInvalidInput = data => {
    const heading =
      'The following errors occurred while processing your request:\n\n'
    const errors = this.formatErrors(data)
    window.alert(heading + errors)
  }
  formatErrors = data => {
    const errors = data.map(error => '- ' + error).join('\n')

    return errors
  }

  render() {
    const { BASE_URL, currentClipboard } = this.props

    return (
      <div>
        <div id='form'>
          <form
            id='create-shortlink'
            onSubmit={e => {
              this.handleSubmit(e)
            }}
          >
            <label htmlFor='targetUrl'>Paste your link here:</label>
            <input
              id='targetUrl-input'
              name='targetUrl'
              type='text'
              value={this.state.targetUrl}
              onChange={this.handleChange}
            />
          </form>
          <button form='create-shortlink' type='submit'>
            Create
          </button>
        </div>
        {this.state.newLink.url && (
          <NewLink
            newLinkUrl={this.state.newLink.url}
            hashValue={this.state.newLink.hash.value}
            BASE_URL={BASE_URL}
            currentClipboard={currentClipboard}
            copyToClipboard={this.props.copyToClipboard}
          />
        )}
      </div>
    )
  }
}
