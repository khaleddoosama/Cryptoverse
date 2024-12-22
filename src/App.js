import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';

import { Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
        <div className="routes">
          <Routes>
            <Route  path="/" element={(<Homepage />)} />
            <Route  path="/exchanges" element={(<Exchanges />)} />
            <Route  path="/cryptocurrencies" element={(<Cryptocurrencies />)} />
            <Route  path="/crypto/:coinId" element={(<CryptoDetails />)} />
            <Route  path="/news" element={(<News />)} />
          </Routes>
        </div>
      <div className="footer" >
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Cryptoverse <br />
          All right reserverd
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;

/* <Route exact path="/" element={(<Homepage />)}>
              <Homepage />
            </Route>
            <Route exact path="/exchanges"> 
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>*/