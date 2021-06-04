import React, { Component } from "react";
import logo from '../../assets/imgs/aloe-img/apple-touch-icon.png';

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" height="50"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fas fa-bars fa-2x text-light"></i></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active h5" aria-current="page" href="/">Accueil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light h5" href="/services">Nos services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light h5" href="/travaux">Nos travaux</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light h5" href="/equipe">Notre équipe</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light h5" href="/contact">contacts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light h5" href="/compte"><i className="fas fa-user-circle"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Header;
