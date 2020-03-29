import React, {useEffect, useState} from 'react';
import { DELAY_TRANSITION_PHOTO } from '../../config/config';
import { DetailsPhotos as IDetailsPhotos }  from '../../models/DetailsPhotos';
import { ExifPhoto as IExifPhoto }  from '../../models/ExifPhoto';
import ExifDetails from '../ExifDetails/ExifDetails';
import PhotoContext from '../../context/PhotoContext';

type MyProps = {
    photo: IDetailsPhotos 
    exifDetails: IExifPhoto
}

const DetailsPhoto:React.FC<MyProps> = ({photo, exifDetails}) => {
    
    const [activeClass, setActiveClass] = useState<string>('');
    useEffect(() => {
        setTimeout(() => {
            setActiveClass('is-active');
        }, DELAY_TRANSITION_PHOTO)
    });

    const formatDate = (date: string): string => {
        let dateToArray: string[] = date.split(' ');
        let dateYearToArray: string[] = dateToArray[0].split('-');
        let reverseDate: string[] = [];
        for (let i = dateYearToArray.length - 1; i >= 0; i--) {
            reverseDate.push(dateYearToArray[i])
        }
        return `${reverseDate.join('/')} à ${dateToArray[1]}`;
    }

 
    return (
        <PhotoContext.Consumer>
            { context => {
                return (
                <div className={`details-photo-wrapper details-photo-wrapper--${context.theme}`}>
                    <figure className={`detailsPhoto ${activeClass}`}>
                        <img className={'item'} src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} width={600} alt={`${photo.title._content}`} />
                        <figcaption>
                            <ul>
                                <li className="title">
                                    {photo.title._content}
                                </li>
                                    {photo.description._content !== '' && (
                                        <li>{photo.description._content}</li>
                                    )}
                                <li>
                                    Photographié le {formatDate(photo.dates.taken)}
                                </li>
                            </ul>
                            <ExifDetails exifDetails={exifDetails} />
                        </figcaption>
                    </figure>
                </div>
                )
            }}
        </PhotoContext.Consumer>
    )
}

export default DetailsPhoto;