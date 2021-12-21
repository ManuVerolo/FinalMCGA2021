import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import HomeFront from './components/Front/Home/Home';
import Home from './components/Home/Home';
import About from './components/About/About';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
    <BrowserRouter>
        <Container maxidth="lg">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomeFront/>}></Route>
                <Route exact path="/admin/products" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/signup" element={<Signup/>} />
            </Routes>
            {/* <Footer /> */}
        </Container>
    </BrowserRouter>
    );
  
}

export default App;
