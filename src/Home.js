import React from 'react';

import Landing_video from './media/bg1.mp4';
import Navbar from './components/Navbar';

class Home extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          
          <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position:"fixed",
                        width:"100%",
                        left:"50%",
                        top:"25%",
                        bottom:"25%",
                        height:"100%",
                        objectFit:"cover",
                        transform: "translate(-50%,-50%)",
                        zIndex:"-1"
                    }}
                    >
                    <source src = {Landing_video} type = "video/mp4" />
                </video>
          
        </div>
      );
  }
}

export default Home;