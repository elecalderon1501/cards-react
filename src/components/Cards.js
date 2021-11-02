import React from 'react';
import Card from './Card';

import soup from "../img/soup.jpg"
import tomatoes from "../img/tomatoes.jpg"
import vegetable from "../img/vegetable-skewer.jpg"

const cards = [
    {
    id : 1,
    title : "Potatos Soup",
    image : soup ,   
    },
    {
    id : 2,
    title : "Tomatoes",
    image : tomatoes    
    },
    {
    id : 3,
    title : "Vegetable",
    image : vegetable    
    }

]

function Cards() {
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {cards.map(({ id, title, image}) =>(
                <div className="col-md-4" key={id}><Card imageSource={image} title={title}/>
                </div>
            ))
            }
        </div>
      </div>
    );
  }
  export default Cards;