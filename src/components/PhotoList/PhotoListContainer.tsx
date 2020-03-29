import React, { FC } from 'react';
import PhotoContext from '../../context/PhotoContext';
import PhotoList from './../PhotoList/PhotoList';
import { Photo as IPhoto } from './../../models/Photo';

const getCachedPhotos = (loadedPhotosFromApi: IPhoto[], nbPhotosGallery: number) : IPhoto[] | null => {
    let photos: IPhoto[] = [];
    if (localStorage.getItem("photos") !== null) {
        const localPhotosArray: IPhoto[] = JSON.parse(localStorage.getItem("photos")!);
        if (localPhotosArray.length === nbPhotosGallery) {
            photos = localPhotosArray;
        }
    } else {
        if (loadedPhotosFromApi.length === 0) {
            return null;
        } 
        photos = loadedPhotosFromApi;
        localStorage.setItem("photos", JSON.stringify(photos));
    }

    return photos;
}

const shuffle = (array: IPhoto[]): IPhoto[] => {
    let array2:IPhoto[] = [];
    while(array.length !== 0) {
        let randomIndex = Math.floor(Math.random() * array.length)
        array2.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }
    return array2;
}

const PhotoListContainer:FC = () => {
    return (
        <PhotoContext.Consumer>
            {context => {
            const photos = getCachedPhotos(context.data, context.nbPhotosGallery);
                if (photos === null) {
                    return <div>loading ...</div>
                }
                const suffledPhotos = shuffle(photos);
                return (
                <PhotoList 
                    photos={suffledPhotos}
                    theme={context.theme}
                    heightGapGrid={context.heightGapGrid}
                />)
                }
            }
            </PhotoContext.Consumer>
        );
}

export default PhotoListContainer;