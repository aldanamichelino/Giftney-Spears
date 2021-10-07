import React from 'react';
import loadingFlower from '../../assets/static/loading-flower.png';

export const Spinner = () => {
    return (
        <div className="App-loading-flower">
            <img src={ loadingFlower } alt="Loading flower, imagen de carga" />
        </div>
    )
}
