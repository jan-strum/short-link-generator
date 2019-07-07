import React from 'react'

const AllLinks = ({ data, copyToClipBoard }) => (
  <table>
    <thead>
      <tr>
        <th scope='col'>Full Links:</th>
        <th scope='col'>Shortened Links:</th>
      </tr>
    </thead>
    <tbody>
      {data.map(link => {
        const { url } = link.shortlink
        return (
          <tr key={link.id}>
            <td>
              <a href={link.url}>{link.url}</a>
            </td>
            <td>
              <a href={url}>{url}</a>
            </td>
            <td>
              <button onClick={() => copyToClipBoard(url)}>
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
