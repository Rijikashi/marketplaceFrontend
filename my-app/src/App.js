import logo from './logo.svg';
import ReactDOM from 'react-dom/client'
import {useState,useEffect, React} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Callback from './components/callback.js'
import Testing from './components/testing.js'
import Home from './home.js'



// import UserInfo from './pages/userinfo.js'
import About from './pages/about.js'
import Account from './pages/account.js'
import Contact from './pages/contact.js'
import Homepage from './pages/homepage.js'
import Product from './pages/product.js'
import Shop from './pages/shop.js'

//const authUser = React.createContext("Sign In");
const api_URL = (process.env.REACT_APP_DEV ? process.env.REACT_APP_DEVAPI_URL : process.env.REACT_APP_PRODAPI_URL);
//const URLContext = React.createContext("")

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage/>} />
            <Route path="oauth/callback" element={<Callback/>} />
            <Route path= "shop" element = {<Shop/>} />
            <Route path="account" element = {<Account/>} />
            <Route path="product" element = {<Product/>}/>
            <Route path="about" element = {<About/>} />
            <Route path ="contact" element ={<Contact/>} />
            <Route path="testing" element={<Testing/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
