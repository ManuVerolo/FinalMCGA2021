import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import useStyles from './styles';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
    <BrowserRouter>
        <Container maxidth="lg">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
            </Routes>
            <Footer />
        </Container>
    </BrowserRouter>
    );
  
}

export default App;
