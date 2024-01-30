import React from 'react';
import logo from '../images/boardLogo.svg';

function Navigation(){
    return (
        <header id="hero" className="navBar">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <a className="active" href="#hero" >Products</a>
                <a>Apps & Games</a>
                <a>Features</a>
                <a>Support</a>
                <a>About</a>
            </nav>
            <i className='ShoppingBasketIcon'></i>
        </header>
    );
}

function HeroContent(){
    return (
        <div className='HeroWrapper'>
            <div className='HeroContentWrapper'>
                <h1 className='HeaderDisplay'>Let your mind <span className='gradientText'>explore</span> new world</h1>
                <p className='HeroCopy'>Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.</p>
                <div className='heroButtons'>
                    <a className='solid button'><span>Buy now</span></a>
                    <a className='button'><span className="gradientText">Play now</span></a>
                </div>
            </div>
            <div className="statsWrapper">
                <div className="stat">
                    <h3>300+</h3>
                    <p>Unique Style</p>
                </div>
                <div className="stat">
                    <h3 className='gradientText'>200+</h3>
                    <p>Project Finished</p>
                </div>
                <div className="stat">
                    <h3>500+</h3>
                    <p>Happy Customer</p>
                </div>
            </div>
        
            
        </div>
        
    );
}






function HeroSection(){
    return (
        <div className='heroSectionWrapper'>
            <Navigation />
            <HeroContent />
        </div>
    );
}

export default HeroSection;