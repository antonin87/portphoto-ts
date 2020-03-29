import React from 'react';
import {Photo as IPhoto} from '../../models/Photo';
import {themeType} from '../../models/Theme';
import { getCoordinates } from '../../config/grid';
import Photo from '../Photo/Photo';

type MyProps = { photos: IPhoto[], theme: themeType, heightGapGrid: number };
type MyState = { photosWithCoordinates: IPhoto[] };

class PhotoList extends React.Component<MyProps, MyState> {
    state: MyState = {
        photosWithCoordinates: []
    };

    componentDidMount() {
        let tmpPhotos: IPhoto[] = [];
        let photosWithCoordinates: IPhoto[] = [];
        let cpt: number = 0;
        const { photos } = this.props;
        for (let i = 0; i < photos.length; i++) {
            if (tmpPhotos.length < 3) {
                tmpPhotos.push(photos[i]);
            }
            if (tmpPhotos.length === 3) {
                cpt++;
                this.assignateCoords(tmpPhotos);
                photosWithCoordinates = photosWithCoordinates.concat(tmpPhotos);
                tmpPhotos = [];
            }
        }
        this.setState({photosWithCoordinates});
     }

     assignateCoords(photos: IPhoto[]): IPhoto[] {
        const landscapePhoto = photos.filter(photo => this.getOrientation(photo.width_c, photo.height_c) === 'landscape');
        const portraitPhoto = photos.filter(photo => this.getOrientation(photo.width_c, photo.height_c) === 'portrait');
        const coordinates = getCoordinates(landscapePhoto.length, portraitPhoto.length);
        const randomIndex = Math.floor(Math.random() * coordinates.length);
        const coordPhotosLandscape = landscapePhoto.map((photo, index) => Object.assign(photo, coordinates[randomIndex].landscape[index])) 
        const coordPhotosPortrait = portraitPhoto.map((photo, index) => Object.assign(photo, coordinates[randomIndex].portrait[index]));
        
        return coordPhotosLandscape.concat(coordPhotosPortrait);
     }

    getOrientation(w: number, h:number): string {
        let orientation = 'landscape';
        if (h > w) {
            orientation = 'portrait';
        }
        return orientation;
    }

    render() {
        const { photosWithCoordinates } = this.state;
        const { theme, heightGapGrid } = this.props;
        let rowStart: number = 1;
        let rowEnd: number = heightGapGrid + 1;
        return (
            <div className={`gallery gallery--${theme}`}>
                {
                 photosWithCoordinates.map((photo, index) => {
                     const photoComponent = <Photo 
                        key={index}
                        rowStart={rowStart}
                        rowEnd={rowEnd}
                        photo={photo}
                        className={`item item--${index}`}
                    />
                    if (++index % 3 === 0) {
                        rowStart = rowStart + heightGapGrid;
                        rowEnd = rowEnd + heightGapGrid;
                    }
                    return photoComponent;
                 })
               }
            </div>
          )
        }
    }




export default PhotoList;