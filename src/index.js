import React from 'react';
import ReactDOM from 'react-dom/client';
//  import './index.css';
import Header from './header/header';
import Profile from './profile/profile';
import Home from './home/home';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';

const obj={
  name:"Solely"
}

function Main(){
   return <div>
      <Header data={obj.name}/>
      <Profile/>
      <Home/>
      <Footer/>
   </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
