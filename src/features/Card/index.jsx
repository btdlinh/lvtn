import React from 'react';
import PropTypes from 'prop-types';
import CardList from './components/CardList';

CardFeature.propTypes = {
    // cardList: PropTypes.array.isRequired,
};

function CardFeature(props){
    const cardList = [
        {id: 1, name: 'Kim Nam Joon', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        {id: 2, name: 'Kim Seok Jin', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        {id: 3, name: 'Min Yoon Gi', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        // {id: 4, name: 'Jung Ho-Seok', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        // {id: 5, name: 'Park Ji-Min', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        // {id: 6, name: 'Kim TaeHyung', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        // {id: 7, name: 'Jeon JungKook', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/V_x_Samsung_Galaxy_August_2021.png/375px-V_x_Samsung_Galaxy_August_2021.png'},
        
    ];

    return(
        <div>
            <h3>Bangtan Sonyeondan</h3>
            <CardList cardList={cardList}></CardList>
        </div>
    );
}

export default CardFeature;