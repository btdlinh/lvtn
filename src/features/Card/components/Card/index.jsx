import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Card.propTypes = {
    Card: PropTypes.object.isRequired,
};

function Card({card}) {
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={card.imgUrl} alt={card.name} />
            </div>

            <p className='card_name'>{card.name}</p>
        </div>
    );
}

export default Card;