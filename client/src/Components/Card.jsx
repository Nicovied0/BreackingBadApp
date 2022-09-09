import React from 'react';

function Card({name, image, nickName,id}) {
    return(
        <div>
            <h3>{name}</h3>
            <h5>{nickName}</h5>
            <h3>soy el id:{id}!!</h3>
            <img src={image} alt="no hay" width='200px' height='250px'></img>
        </div>
    );
};

export default Card;