import React from 'react'

const NewShortLink = ({
  newLinkUrl,
  hashValue,
  REDIRECT_URL,
  copyToClipboard
}) => {
  const shortLink = `${REDIRECT_URL}/${hashValue}`

  return (
    <table id='new-link'>
      <colgroup>
        <col width='60%' />
        <col width='35%' />
        <col width='5%' />
      </colgroup>
      <thead>
        <tr>
          <th scope='col'>Full Link:</th>
          <th scope='col'>Shortened link:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href={newLinkUrl}>{newLinkUrl}</a>
          </td>
          <td>
            <a href={shortLink}>{shortLink}</a>
          </td>
          <td>
            <button onClick={() => copyToClipboard(hashValue)}>
              Copy to clipboard
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default NewShortLink
