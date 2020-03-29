import React, { useState, useEffect } from 'react';
import PhotoContext from './PhotoContext';
import { URL_API_ALL_PHOTOS, HEIGHT_GAP_GRID, PHOTO_PER_PAGE } from './../config/config';
import { Photo as IPhoto } from './../models/Photo';
import { themeType } from './../models/Theme';

const PhotoProvider = (props: any) => {

    const themeList:themeType = {
        dark: 'dark-theme',
        light: 'light-theme'
    }
    
    const [data, setData ] = useState<IPhoto[] | []>([]);
    const [theme, setTheme ] = useState<themeType | {}>(themeList.dark);
    const [heightGapGrid, setHeightGapGrid ] = useState<number>(HEIGHT_GAP_GRID);
    const [nbPhotosGallery, setNbPhotoGallery ] = useState<number>(PHOTO_PER_PAGE);


    const toggleTheme = (status: {enabled: boolean}): void => {
        const { enabled } = status;
        setTheme(enabled === true ? themeList.light : themeList.dark);
    }

    const handleHeightGapGrid = (value: number) => {
        setHeightGapGrid(value);
    }

    const loadPhotos = async () => {
        fetch(URL_API_ALL_PHOTOS.replace('%%photo_per_page%%', nbPhotosGallery.toString()))
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
            theme,
            heightGapGrid,
            nbPhotosGallery,
            setHeightGapGrid: (value: number) => handleHeightGapGrid(value),
            toggleTheme: (status: {enabled: boolean}) => toggleTheme(status)
        }}>
            {props.children}
        </PhotoContext.Provider>
    )

}

export default PhotoProvider;