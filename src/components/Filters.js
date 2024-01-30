import React from "react";
import tileImg1 from "../images/tiles/game1.png";
import tileImg2 from "../images/tiles/game2.png";
import tileImg3 from "../images/tiles/game3.png";
import tileImg4 from "../images/tiles/game4.png";
import tileImg5 from "../images/tiles/game5.png";
import tileImg6 from "../images/tiles/game6.png";

import authorImg1 from "../images/authors/author1.jpg";
import authorImg2 from "../images/authors/author2.jpg";
import authorImg3 from "../images/authors/author3.jpg";
import authorImg4 from "../images/authors/author4.jpg";
import authorImg5 from "../images/authors/author5.jpg";
import authorImg6 from "../images/authors/author6.jpg";

const gameTiles = [
    {
        id: 0,
        src: tileImg1,
        gameTitle: "Core Philosophies",
        gameLink: "/",
        author: "Cameron Williamson",
        authorCompany: "Gillette",
        authorImg: authorImg1
    },
    {
        id: 1,
        src: tileImg2,
        gameTitle: "Core Philosophies",
        gameLink: "/",
        author: "Dianne Russel",
        authorCompany: "Louis Vuitton",
        authorImg: authorImg2
    },
    {
        id: 2,
        src: tileImg3,
        gameTitle: "Core Philosophies",
        gameLink: "/",
        author: "Jane Cooper",
        authorCompany: "MasterCard",
        authorImg: authorImg3
    },
    {
        id: 3,
        src: tileImg4,
        gameTitle: "Core Philosophies",
        gameLink: "/",
        author: "Cody Fisher",
        authorCompany: "The Walt Disney Company",
        authorImg: authorImg4
    },
    {
        id: 4,
        src: tileImg5,
        gameTitle: "Core Philosophies",
        gameLink: "/",
        author: "Wade Warren",
        authorCompany: "Gillette",
        authorImg: authorImg5
    },
    {
        id: 5,
        src: tileImg6,
        gameTitle: "Core Philosophies",
        gameLink: "/",
        author: "Robert Fox",
        authorCompany: "L'Oréal",
        authorImg: authorImg6
    },
]




const gameArray = gameTiles.map((tile) =>
    <div className="gameTile" key={tile.id}>
        <img className="gameScreenshot" src={tile.src} />
        <h3 className="gameTitle">{tile.gameTitle}</h3>
        <div className="authorBlock">
            <img className="authorImg" src={tile.authorImg} />
            <div className="authorInfoCol">
                <h4>{tile.author}</h4>
                <h5>{tile.authorCompany}</h5>
            </div>
        </div>
        <a className="authorButton"><span>Live Demo</span></a>
    </div>
);



function Filters(){
    return <div className="filtersWrapper">
                <div className="filtersButtons">
                    <a className="solid button"><span>Newest games</span></a>
                    <a className="button"><span>Latest games</span></a>
                    <a className="button"><span>Fight games</span></a>
                    <a className="button"><span>Sport games</span></a>
                </div>
                <div className="filtersGameArrayWrapper">
                    {gameArray}
                </div>
            </div>
}

export default Filters;