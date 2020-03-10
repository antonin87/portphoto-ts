import React from 'react';
import styled from 'styled-components';
import {Photo as IPhoto, Coordinates} from '../models/Photo';

type MyProps = {photos: IPhoto[]};
type MyState = {photosWithCoordinates: IPhoto[]};

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
        const coordinates = this.getMatricePhotos(landscapePhoto.length, portraitPhoto.length);
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

    getMatricePhotos(nbLandscape: number, nbPortrait: number): Coordinates[] {
        let  coordinates: Coordinates[] = []
        if (nbPortrait >= 1 && nbLandscape > 1) {
                coordinates = [
                /*
                    |-------| |---| |-------| 
                    |_______| |---| |_______| 
                */
                {
                    "landscape": [{colStart: 1, colEnd: 4}, {colStart: 6, colEnd: 9}],
                    "portrait": [{colStart: 4, colEnd:6}]
                },
                /*
                    |-------| |-------| |---|
                    |_______| |_______| |---|
                */
                {
                    "landscape": [{colStart: 1, colEnd: 4}, {colStart: 4, colEnd: 7}],
                    "portrait": [{colStart: 7, colEnd:9}]
                },
                /*
                    |---| |-------| |-------| 
                    |---| |_______| |_______| 
                */
                {
                    "landscape": [{colStart: 3, colEnd: 6}, {colStart: 6, colEnd: 9}],
                    "portrait": [{colStart: 1, colEnd:3}]
                }
            ];
        }
        if (nbPortrait > 1 && nbLandscape >= 1) {
            coordinates = [
                {
                    "landscape": [{colStart: 3, colEnd: 7}],
                    "portrait": [{colStart: 1, colEnd:3}, {colStart: 7, colEnd:9}]
                },
                {
                    "landscape": [{colStart: 1, colEnd: 5}],
                    "portrait": [{colStart: 5, colEnd:7}, {colStart: 7, colEnd:9}]
                },
                {
                    "landscape": [{colStart: 5, colEnd: 9}],
                    "portrait": [{colStart: 1, colEnd:3}, {colStart: 3, colEnd:5}]
                }
            ]
        }
        else if (nbPortrait > 1 && nbLandscape >= 1) {
            coordinates = [
                /*
                    |---| |-------| |-------| 
                    |---| |_______| |_______| 
                */
                {
                    "landscape": [{colStart: 3, colEnd: 7}],
                    "portrait": [{colStart: 1, colEnd:3}, {colStart: 7, colEnd:9}]
                },
                {
                    "landscape": [{colStart: 1, colEnd: 5}],
                    "portrait": [{colStart: 5, colEnd:7}, {colStart: 7, colEnd:9}]
                },
                {
                    "landscape": [{colStart: 5, colEnd: 9}],
                    "portrait": [{colStart: 1, colEnd:3}, {colStart: 3, colEnd:5}]
                }
            ]
        }
        else if (nbPortrait === 0) {
            coordinates = [
                {
                    "landscape": [{colStart: 1, colEnd: 4}, {colStart: 4, colEnd: 7}, {colStart: 7, colEnd: 9}]
                }
            ]
        }
        else if (nbLandscape === 0) {
            coordinates = [
                {
                    "portrait": [{colStart: 1, colEnd: 3}, {colStart: 3, colEnd: 6}, {colStart: 6, colEnd: 9}],
                }
            ]
        }

        return coordinates;
    }


    render() {
        const { photosWithCoordinates } = this.state;
        let cpt: number = 0;
        let rowStart: number = 1;
        let rowEnd: number = 5;
        return (
            <div className="gallery">
                {
                 photosWithCoordinates.map((photo, index) => {
                    cpt++;
                     const Figure = styled.figure`
                        grid-column-start: ${photo.colStart};
                        grid-column-end: ${photo.colEnd};
                        grid-row-start: ${rowStart};
                        grid-row-end: ${rowEnd};
                    `;
                    if (++index % 3 === 0) {
                        rowStart = rowStart + 4;
                        rowEnd = rowEnd + 4;
                    }
                      return (
                        <Figure className={`item item--${cpt}`} key={index}>
                            <img src={photo.url_c} alt={photo.title} />
                            <figcaption>{photo.title}</figcaption>
                        </Figure>
                     )
                     
                 })
               }
            </div>
          )
        }
    }




export default PhotoList;