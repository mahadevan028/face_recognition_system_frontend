import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain.png';


function Logo() {
    return (
        <div className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l'>
            <Tilt className="Tilt br2 shadow-2 dib w2 h2 br-100" options={{ max: 55 }} style={{ height: 40, width: 40 }} >
                <div className="Tilt-inner"><img src={Brain} alt="logo"/></div>
            </Tilt>
           <span className='dim white f6 f5-l dib mr3 mr4-l'>Smart Brain</span>
        </div>
    );
}

export default Logo;