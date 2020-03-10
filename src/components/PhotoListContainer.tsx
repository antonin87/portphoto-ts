import React, { FC } from 'react';
import PhotoContext from '../context/PhotoContext';
import PhotoList from './PhotoList'

const PhotoListContainer:FC = () => {
    return (
        <PhotoContext.Consumer>
            {context => {
                let component = null;
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