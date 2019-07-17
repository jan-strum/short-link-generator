import React from 'react'
import CopyToClipboard from './CopyToClipboard'

const NewLink = ({
  newLinkUrl,
  hashValue,
  BASE_URL,
  currentClipboard,
  copyToClipboard
}) => {
  const shortLink = `${BASE_URL}/${hashValue}`

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
            <CopyToClipboard
              shortLink={shortLink}
              currentClipboard={currentClipboard}
              copyToClipboard={copyToClipboard}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default NewLink
