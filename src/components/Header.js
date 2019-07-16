import React from 'react'

const Header = ({ toggleDisplay, display }) => (
  <div>
    <header>
      <h1>Short Link Generator</h1>
    </header>
    <nav>
      <div
        id={display === 'create' ? 'selected' : 'not-selected'}
        className='nav-item'
        onClick={() => toggleDisplay('create')}
      >
        Create
      </div>
      <div
        id={display === 'view' ? 'selected' : 'not-selected'}
        className='nav-item'
        onClick={() => toggleDisplay('view')}
      >
        View
      </div>
    </nav>
  </div>
)

export default Header
