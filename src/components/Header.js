import React from 'react'

const Header = ({ toggleDisplay }) => (
  <div>
    <header>
      <h1>Short Link Generator</h1>
    </header>
    <nav>
      <div className='nav-item' onClick={() => toggleDisplay('create')}>
        Create
      </div>
      <div className='nav-item' onClick={() => toggleDisplay('view')}>
        View
      </div>
    </nav>
  </div>
)

export default Header
