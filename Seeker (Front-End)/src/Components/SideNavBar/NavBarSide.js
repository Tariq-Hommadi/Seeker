import React, { Component } from 'react'
import './NavBarStyle.css'

export default class NavBarSide extends Component {
  render() {
    return (
      <div>
        <div className="social-head">
          <a href="/favourites" target="_blank"><img src='images/favoriteBlue.png' className='imgIcon' /></a>
          <a href="/bookmarks" target="_blank"><img src='images/BlueIcon.png' className='imgIcon' /></a>
        </div>
      </div>
    )
  }
}
