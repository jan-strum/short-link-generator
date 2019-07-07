import React from 'react'

const NewShortLink = ({ newLinkUrl, shortLinkUrl, copyToClipboard }) => (
  <div id='new-link'>
    <table>
      <thead>
        <th scope='col'>Full Link:</th>
        <th scope='col'>Shortened link:</th>
      </thead>
      <td>
        <a href={newLinkUrl}>{newLinkUrl}</a>
      </td>
      <td>
        <a href={shortLinkUrl}>{shortLinkUrl}</a>
      </td>
      <td>
        <button onClick={copyToClipboard(shortLinkUrl)}>
          Copy to clipboard
        </button>
      </td>
    </table>
  </div>
)

export default NewShortLink
