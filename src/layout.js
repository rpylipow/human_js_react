import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import NavHelper from './components/nav-helper'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',
  
  render () {
    // ES6 Destructuring
    // Same as const me = this.props.me
    // Could also do const {me, user} = this.props if props was an object
    // with me and user as attributes
    const {me} = this.props 
    
    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li><a href='/'>Labelr</a></li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'>{me.name} <a href='/logout'>Logout</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
