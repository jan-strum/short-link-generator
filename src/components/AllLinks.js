import React from 'react'

const AllLinks = ({ data, redirect, REDIRECT_URL, copyToClipboard }) => (
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
        const { hash } = link.shortlink
        const shortLink = `z4th.com/${hash}`
        return (
          <tr key={link.id}>
            <td>
              <a href={link.url}>{link.url}</a>
            </td>
            <td>
              <a href={`${REDIRECT_URL}/${hash}`}>{shortLink}</a>
            </td>
            <td>
              <button onClick={() => copyToClipboard(shortLink)}>
                Copy to clipboard
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default AllLinks
