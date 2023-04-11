import logo from './logo.svg';
import ReactDOM from 'react-dom/client'
import {useState,useEffect, React} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login.js'
import Callback from './components/callback.js'
import Testing from './components/testing.js'
import Home from './home.js'
import Product from './components/product.js'
import About from './components/about.js'
import UserInfo from './components/userinfo.js'
import Contact from './components/contact.js'
//const authUser = React.createContext("Sign In");
const api_URL = (process.env.REACT_APP_DEV ? process.env.REACT_APP_DEVAPI_URL : process.env.REACT_APP_PRODAPI_URL);
//const URLContext = React.createContext("")

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="oauth/callback" element={<Callback/>} />
            <Route path="product" element = {<Product/>}/>
            <Route path="about" element = {<About/>} />
            <Route path ="contact" element ={<Contact/>} />
            <Route path = "userinfo" element = {<UserInfo/>} />
            <Route path="testing" element={<Testing/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
