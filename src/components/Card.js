import React from 'react';
import  "./Card.css"


function Card({imageSource, title, text}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="food" className="card-img-top"/>
            </div>
            <div className="card-body text-light"> 
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                {
                    text?text:"lorem ipsum"
                }
                </p>
                
            </div>
        </div>
    );
}

export default Card
