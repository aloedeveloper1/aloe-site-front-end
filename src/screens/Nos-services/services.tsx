import React, { Component } from 'react';
import Header from '../../components/Carroussel/Carroussel';
import Footer from '../../components/Footer/Footer';
import './services.css';
import image1 from '../../assets/imgs/services-02.jpg';
import image2 from '../../assets/imgs/services-03.jpg';
import image3 from '../../assets/imgs/services-06.jpg';
import image4 from '../../assets/imgs/services-07.jpg';

class Services extends Component{
    render(){
        return(
            <>
                <Header 
                    home="nav-link text-light h5" 
                    service="nav-link active h5" 
                    about="nav-link text-light h5" 
                    contact="nav-link text-light h5"
                />
                <section>
                    <div className="container">
                        <div className="row my-5"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card text-white">
                                    <img src={image1} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. 
                                            This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-white">
                                    <img src={image2} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. 
                                            This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-white">
                                    <img src={image3} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. 
                                            This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light py-5">
                        <div className="feature-work container my-4">
                            <div className="row d-flex d-flex align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="feature-work-title h4 text-muted light-300">Featured Work</h3>
                                    <h1 className="feature-work-heading h2 py-3 semi-bold-600">Transform with us</h1>
                                    <p className="feature-work-body text-muted light-300">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </p>
                                    <p className="feature-work-footer text-muted light-300">
                                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                                        Risus commodo viverra maecenas. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-left">
                                    <div className="row">
                                        <img className="img-fluid" src={image4} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Services;