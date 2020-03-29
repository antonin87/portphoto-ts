import React from 'react';
import { ExifPhoto as IExifPhoto, Exif as IExif }  from '../../models/ExifPhoto';
import ApertureSvg from '../svg/ApertureSvg';
import ISOSvg from '../svg/ISOSvg';
import EyeSvg from '../svg/EyeSvg';
import ClockSvg from '../svg/ClockSvg';
import PhotographySvg from '../svg/PhotographySvg';

type exifProps = {
    exifDetails: IExifPhoto | any,
}

const ExifDetails = (props: exifProps) => {
    const { exifDetails } = props;
    const aperture = exifDetails.exif.find((ex: IExif) => ex.label === 'Aperture');
    const focalLength = exifDetails.exif.find((ex: IExif) => ex.label === 'Focal Length')
    const iso = exifDetails.exif.find((ex: IExif) => ex.tag === 'ISO');
    const exposureTime = exifDetails.exif.find((ex: IExif) => ex.tag === 'ExposureTime');
    const lensModel = exifDetails.exif.find((ex: IExif) => ex.tag === 'LensModel');
 
    return (
            aperture === undefined ? (
                <div></div>
            ) : (
            <React.Fragment>
                <ul className="camera">
                    <li className="camera-icon"><PhotographySvg /></li>
                    <li className="lens-model">
                        <ul>
                            <li>{exifDetails.camera}</li>
                            <li>{lensModel.raw._content}</li>
                        </ul>
                            
                    </li>
                </ul>
                <ul className="exif-details">
                    <li className="aperture"><ApertureSvg />{aperture.clean._content}</li>
                    <li className="focal-length"><EyeSvg />{focalLength.raw._content}</li>
                    <li className="iso"><ISOSvg />{iso.raw._content}</li>
                    <li className="exposure"><ClockSvg />{exposureTime.raw._content}</li>
                </ul>   
            </React.Fragment>
            )
        )
}

export default ExifDetails;