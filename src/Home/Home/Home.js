import React from 'react';
import Award from '../Award/Award';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header />
            <Award />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;