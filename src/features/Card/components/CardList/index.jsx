import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.scss';
// Vui long IMPORT 

CardList.propTypes = {
    cardList: PropTypes.array.isRequired,
};

function CardList({cardList}) {
    return (
        <ul className="card-list">
            {cardList.map(card => (
                <li key={card.id}>
                   {/* <p>{card.name}</p> */}
                   <Card card={card}></Card>
                </li>
            ))}
        </ul>
    );
}

export default CardList;