import Navbar from '../../components/header/Navbar';
import Footer from '../../components/Footer/Footer';
import './home.css'
import React, { Component } from 'react';

class Home extends Component{
    render(){
        return (
            <div id="home">
                <section className="text-light">
                    <div className="container">
                        <Navbar />
                        <div className="row">
                            <div className="col-sm-4 mt-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Velit illo laborum repellat voluptates, 
                                blanditiis qui, itaque nisi reprehenderit nobis illum 
                                inventore a molestias repellendus sit unde, 
                                reiciendis enim officiis maiores!
                            </div>
                        </div>
                        <Footer />
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;