import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { KEY, URL_API_DETAIL_PHOTO, URL_API_EXIF_PHOTO } from '../../config/config';
import { DetailsPhotos as IDetailsPhotos }  from '../../models/DetailsPhotos';
import { ExifPhoto as IExifPhoto }  from '../../models/ExifPhoto';

import DetailsPhoto from './DetailsPhoto';

const DetailsPhotosContainer:React.FC = () => {
    let { id } = useParams<{id: string | undefined}>();

    const [photoDetail, setPhotoDetail ] = useState<any | IDetailsPhotos>({});
    const [exifDetail, setExifDetail ] = useState<any | IExifPhoto>({});

   const loadPhotos = async () => {
    Promise.all([
        fetch(URL_API_DETAIL_PHOTO.replace('%%id%%', id)),
        fetch(URL_API_EXIF_PHOTO.replace('%%id%%', id))
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([photoDetails, exifDetails]) => {
        setPhotoDetail(photoDetails);
        setExifDetail(exifDetails);
    });
   }

   useEffect(() => {
       async function loadPhotosAsync() {
       await loadPhotos();
     }
     loadPhotosAsync();
   }, []);

   let component = null;
   if (Object.keys(photoDetail).length !== 0
       && Object.keys(exifDetail).length !== 0) {
       component = <DetailsPhoto photo={photoDetail.photo} exifDetails={exifDetail.photo} />;
   }
   return component;
}

export default DetailsPhotosContainer;