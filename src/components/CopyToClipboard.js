import React from 'react'

export default class CopyToClipboard extends React.Component {
  render() {
    const { copyToClipboard, shortLink } = this.props

    return (
      <button onClick={() => copyToClipboard(shortLink)}>
        Copy to clipboard
      </button>
    )
  }
}
