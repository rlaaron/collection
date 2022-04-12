import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import gif from './assets/img/preview.gif'
import banner from './assets/img/banner3.jpg'

function App() {
  const [accounts, setAccounts] = useState([]);

  return <div className='container'>
    <div className='header'>
      <NavBar accounts={accounts} setAccounts={setAccounts} />
    </div>
    <div className='main'>
    <img src={gif} alt="gif" class="gif"/>
    </div>
    <div className='sidebar'>
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
    <div className='footer'>
      <img src={banner} alt="banner" class="logo"/>
    </div>
    
  </div>;
}

export default App;
