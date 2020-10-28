import '../styles/BackgroundStyles.css';
import React from 'react';
import image1 from '../images/png1-effect1.png'
import image2 from '../images/png2-effect2.png'
import image3 from '../images/png3-effect3.png'
import image4 from '../images/png4-effect4.png'

function Background() {
  return (
      <section>
        <div class="leaves">
            <div><img src={image1} alt="leaf"/></div>
            <div><img src={image2} alt="leaf"/></div>
            <div><img src={image3} alt="leaf"/></div>
            <div><img src={image4} alt="leaf"/></div>
            <div><img src={image1} alt="leaf"/></div>
            <div><img src={image2} alt="leaf"/></div>
            <div><img src={image3} alt="leaf"/></div>
            <div><img src={image4} alt="leaf"/></div>
        </div>
        <div class="leaves set2">
            <div><img src={image1} alt="leaf"/></div>
            <div><img src={image2} alt="leaf"/></div>
            <div><img src={image3} alt="leaf"/></div>
            <div><img src={image4} alt="leaf"/></div>
            <div><img src={image1} alt="leaf"/></div>
            <div><img src={image2} alt="leaf"/></div>
            <div><img src={image3} alt="leaf"/></div>
            <div><img src={image4} alt="leaf"/></div>
        </div>
        <div class="leaves set3">
            <div><img src={image1} alt="leaf"/></div>
            <div><img src={image2} alt="leaf"/></div>
            <div><img src={image3} alt="leaf"/></div>
            <div><img src={image4} alt="leaf"/></div>
            <div><img src={image1} alt="leaf"/></div>
            <div><img src={image2} alt="leaf"/></div>
            <div><img src={image3} alt="leaf"/></div>
            <div><img src={image4} alt="leaf"/></div>
        </div>
    </section>
  );
}

export default Background;
