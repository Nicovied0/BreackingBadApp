import React from 'react';

function Card({name, image, nickName,id}) {
    return(
        <div>
            <h3>{name}</h3>
            <h5>{nickName}</h5>
            <img src={image} alt="img character broken" width='200px' height='250px'></img>
        </div>
    );
};

export default Card;