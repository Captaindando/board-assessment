import React from 'react';
import StarImg from "../images/icons/star.svg";

import User1Img from "../images/testimonials/user1.png";
import User2Img from "../images/testimonials/user2.png";

import VerifiedBadge from "../images/icons/verified.svg";
import sliderButtonImg from "../images/icons/SliderButton.svg";
import sliderButtonActiveImg from "../images/icons/SliderButtonActive.svg";

const users = [
    {
        name: "Arlene McCoy",
        company: "McDonald's",
        image: User1Img,
        rating: 5,
        testimonial: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance."
    },
    {
        name: "Kathryn Murphy",
        company: "General Electric",
        image: User2Img,
        rating: 5,
        testimonial: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming."
    }
]

const userList = users.map(user => 
    <div className="testimonialWrapper">
        <div className="rating">
           <img src={StarImg} /> 
           <img src={StarImg} /> 
           <img src={StarImg} /> 
           <img src={StarImg} /> 
           <img src={StarImg} /> 
        </div>
        <p className='testimonial'>{user.testimonial}</p>
        <div className='divider'></div>
        <div className="userBlock">
            <div className='user'>
                <img className="userImg" src={user.image} />
                <div className="userInfoCol">
                    <h4>{user.name}</h4>
                    <h5>{user.company}</h5>
                </div>
            </div>
            <div className='verificationBadge'>
                <img src={VerifiedBadge} />
            </div>
        </div>
    </div>
);

function TestimonialCarousel(){
    return <div className='testimonialsRowWrapper'>
                <div className='testimonialsWrapper'>
                    {userList}
                </div>
                <div className="SliderButtonWrapper">
                    <img src={sliderButtonImg} className="SliderButton" />
                    <img src={sliderButtonImg} className="SliderButton" />
                    <img src={sliderButtonActiveImg} className="SliderButtonActive" />
                    <img src={sliderButtonImg} className="SliderButton" />
                    <img src={sliderButtonImg} className="SliderButton" />
                </div>
            </div>;
}

export default TestimonialCarousel;