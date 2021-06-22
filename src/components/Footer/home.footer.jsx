import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <nav className="navbar fixed-bottom navbar-light bg-transparent mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-sm-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-sm-4">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/"><i className="fab fa-facebook-square"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/services"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/travaux"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Footer;