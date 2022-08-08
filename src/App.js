import './App.css';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Homepage,Cryptocurrencies,CryptoDetails,News} from "./components"
function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'> 
            <Routes>
              <Route exact path='/' element={<Homepage/>}/>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
              <Route exact path='/news' element={<News/>}/>
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
            CryptoVest<br/>
            by 🚀 <a href='https://github.com/hafizmp' target="_blank" rel="noreferrer" style={{color:"#A5C9CA"}}>CodeKofy</a>
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;