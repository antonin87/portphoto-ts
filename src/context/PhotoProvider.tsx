import React, { useState, useEffect } from 'react';
import PhotoContext from './PhotoContext';
import { Photo as IPhoto } from './../models/Photo';

const PhotoProvider = (props: any) => {
    
    const [data, setData ] = useState<IPhoto[] | []>([]);

    const loadPhotos = async () => {
        const url = 'https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=44d2d8f43daa7ebd61eadce325604b8b&user_id=127882799%40N05&format=json&nojsoncallback=1&per_page=15&extras=url_c';
        fetch(url)
        .then(response => response.json())
        .catch(function() {
            throw new Error("can't load photo api");
        })
        .then(result => {
            const photos = result.photos.photo;
            setData(photos);
        })
    }

    useEffect(() => {
        async function loadPhotosAsync() {
        await loadPhotos();
      }
      loadPhotosAsync();
    }, []);


    return (
        <PhotoContext.Provider value={{
            data,
        }}>
            {props.children}
        </PhotoContext.Provider>
    )

}

export default PhotoProvider;