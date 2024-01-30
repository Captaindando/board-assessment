import React from 'react';
import Scroller from './Scroller';
import logo from '.././images/boardLogo.svg';

function Footer(){
    return (
        <div className="footerContainer">
           <Scroller class="ScrollerWrapper" />
            <div className="NavigationWrapper">
                <div className="footerCol Col1">
                <img className="footerLogo" src={logo} />
                <p className='footerDescription'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .</p>
                </div>
                <div className="footerCol Col2">
                    <ul>
                        <h5>Company</h5>
                        <li>Products</li>
                        <li>Apps & Games</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className="footerCol Col3">
                    <ul>
                        <h5>Help</h5>
                        <li>Support</li>
                        <li>About & Games</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footerCol Col4">
                    <ul>
                        <h5>Resources</h5>
                        <li>Youtube Playlist</li>
                        <li>How To - Blog</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footerCol Col5">
                </div>
            </div>
            <div className='copyright'>© Copyright 2023, All Rights Reserved by board</div>
            
        </div>
        
    );
}



export default Footer;