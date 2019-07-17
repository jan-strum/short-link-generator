import React from 'react'
import CopyToClipboard from './CopyToClipboard'

const AllLinks = ({ data, BASE_URL, copyToClipboard }) => (
  <table id='all-links'>
    <colgroup>
      <col width='60%' />
      <col width='30%' />
      <col width='10%' />
    </colgroup>
    <thead>
      <tr>
        <th scope='col'>Full Links:</th>
        <th scope='col'>Shortened Links:</th>
      </tr>
    </thead>
    <tbody>
      {data.map(link => {
        const hashValue = link.hash.value
        const shortLink = `${BASE_URL}/${hashValue}`
        return (
          <tr key={link.id}>
            <td>
              <a href={link.url}>{link.url}</a>
            </td>
            <td>
              <a href={shortLink}>{shortLink}</a>
            </td>
            <td>
              <CopyToClipboard
                copyToClipboard={copyToClipboard}
                shortLink={shortLink}
              />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default AllLinks
