import React, { FC } from 'react';
import PhotoContext from '../context/PhotoContext';
import PhotoList from './PhotoList';
import gridLoader from './../grid.svg';

const PhotoListContainer:FC = () => {
    return (
        <PhotoContext.Consumer>
            {context => {
                let component = <img className="loader" src={gridLoader} />;
                if (context.data.length > 0) {
                    component = <PhotoList photos={context.data} />
                }
                return component
                }
            }
            </PhotoContext.Consumer>
        );


}

export default PhotoListContainer;