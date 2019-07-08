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
    const { data } = await axios.post(LINKS_URL, { url: this.state.targetUrl })
    return data
  }
  handleChange = e => {
    this.setState({ targetUrl: e.target.value })
  }
  handleSubmit = async () => {
    if (!this.state.targetUrl.length) return

    const data = await this.postLink()
    if (data === 'This is not a valid URL. Please try again.') {
      this.alertInvalidInput(data)
      return
    }

    this.setState({
      targetUrl: '',
      newLink: data
    })

    this.props.fetchData()
  }
  alertEmptyInput = () => {
    if (!this.state.targetUrl.length) {
      window.alert('This field may not be blank.')
    }
  }
  alertInvalidInput = errorMessage => {
    window.alert(errorMessage)
  }

  render() {
    return (
      <div>
        <div id='form'>
          <form id='create-shortlink'>
            <label htmlFor='targetUrl'>Paste your link here:</label>
            <input
              id='targetUrl-input'
              name='targetUrl'
              type='text'
              value={this.state.targetUrl}
              onChange={this.handleChange}
            />
          </form>
          <button
            form='create-shortlink'
            type='button'
            onClick={() => {
              this.alertEmptyInput()
              this.handleSubmit()
            }}
          >
            Create
          </button>
        </div>
        {this.state.newLink.url && (
          <NewLink
            newLinkUrl={this.state.newLink.url}
            hash={this.state.newLink.shortlink.hash}
            REDIRECT_URL={this.props.REDIRECT_URL}
            copyToClipboard={this.props.copyToClipboard}
          />
        )}
      </div>
    )
  }
}
