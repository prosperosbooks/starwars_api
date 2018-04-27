import React from "react";

const Card = ({ id, name, height, mass }) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="unsplash" src={`http://flathash.com/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{height}</p>
                <p>{mass}</p>
            </div>
        </div>
    );
};

export default Card;
