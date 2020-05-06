import React, { Component } from 'react'
import './App.css'
import menu from './data.json'

export class Menu extends Component {
  constructor () {
    super()
    this.state = {
      menu
    }
  }

  render () {
    const showMenu = this.state.menu.map((menus, i) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <button className="btn-lg">{menus.name}</button>

      )
    })
    return (
      { showMenu }

    )
  }
};
