import './App.css';
import React from 'react';
import Swipe from './components/Swipe';
import NavBar from './components/NavBar';
class App extends React.Component{

  render() {

    return (
    <body className="main-div" >
      <NavBar />
      <div className="responsive-video">
        <iframe class="embed-responsive-item" src="https://open.spotify.com/embed/playlist/44kWnUkuTHYaAoemWANFrt" name="potw" frameborder="0" allowtransparency="true" allow="encrypted-media">

        </iframe>
      </div>
      <div className="swiper-div">
        <Swipe />
      </div>    
    </body>  
    );
  };
};


export default App;