import React from 'react';
import slider1 from '../images/slides/game-slide-1.png';
import slider2 from '../images/slides/game-slide-2.png';
import slider3 from '../images/slides/game-slide-3.png';


function GameSlide(props){
    return <div className='GameSlide'>
        <img src={props.imgSrc} />
        </div>;
}

function GameSlider(){
    return (
        <div className="gameSliderWrapper">
            <GameSlide imgSrc={slider1}/>
            <GameSlide imgSrc={slider2}/>
            <GameSlide imgSrc={slider3}/>
        </div>
    )
}

function GameCarousel(){
    return (
        <div className='carouselWrapper'>
            <div className='carouselHeader'>
                <h1 className="HeaderDisplay">Choose your <span className='gradientText'>favorite</span> Games</h1>
                <p>Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.</p>    
            </div>
            <GameSlider />
            <div className='carouselButtonWrapper'>
                <a className='solid button'><span>View all</span></a>
                <a className='button'><span>Play now</span></a>
            </div>
        </div>
    );

}



export default GameCarousel;