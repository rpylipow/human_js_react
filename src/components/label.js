import React from 'react'

export default React.createClass({
  displayName: 'Label',

  render () {
    const {label} = this.props

    return (
      <li>{label.name}</li>
    ) 
  }
})
