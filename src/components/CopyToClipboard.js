import React from 'react'

export default class CopyToClipboard extends React.Component {
  render() {
    const { copyToClipboard, shortLink, currentClipboard } = this.props
    console.log(shortLink)

    return (
      <button onClick={() => copyToClipboard(shortLink)}>
        {currentClipboard !== shortLink ? 'Copy to clipboard' : 'Copied!'}
      </button>
    )
  }
}
