import React, { Component } from 'react'
import './TemplateHome.css'
import HomeBackground from '../images/fondo-logo.png'
import Waiter from '../images/Waiter.png'
import Chef from '../images/Chef.png'
import { Link } from 'react-router-dom'

class TemplateHome extends Component {
  render () {
    return (
      <section id="main">
        <div className="container TemplateHome" id="TemplateHome">
          <div className="row">
            <div className="home">
              <header><img className="img-fluid home-logo" src={HomeBackground} alt="templateHome" /></header>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 waiter">
              <Link to="/waiter"><button className="btn-home btn-waiter"><img className="img-fluid img-waiter" src={Waiter} alt="Waiter"/></button></Link>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 chef">
              <Link to="/kitchen"><button className="btn-home btn-chef"><img className="img-fluid img-chef" src={Chef} alt="Chef"/></button></Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default TemplateHome
