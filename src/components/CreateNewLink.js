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

  handleChange = e => {
    this.setState({ targetUrl: e.target.value })
  }
  handleSubmit = async () => {
    const { LINKS_URL } = this.props
    // check for valid input
    this.alertEmptyInput()
    const { data } = await axios.post(LINKS_URL, { url: this.state.targetUrl })
    this.setState({
      targetUrl: '',
      newLink: data
      // data: [...this.state.data, data]
    }) // check that it does not already contain this item
    this.setState({ target: '' })
    this.props.fetchData()
  }
  alertEmptyInput = () => {
    if (!this.state.targetUrl.length) {
      window.alert('This field may not be blank.')
    }
  }
  alertInvalidInput = () => {}
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
            onClick={this.handleSubmit}
          >
            Create
          </button>
        </div>
        {this.state.newLink.url && (
          <NewLink
            newLinkUrl={this.state.newLink.url}
            shortLinkUrl={this.state.newLink.shortlink.url}
            copyToClipboard={this.props.copyToClipboard}
          />
        )}
      </div>
    )
  }
}
