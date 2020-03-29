import React from 'react';
import styled from 'styled-components';
import {Photo as IPhoto} from '../../models/Photo';
import {Link} from "react-router-dom";

type MyProps = {
    className: string,
    photo: IPhoto,
    rowStart: number,
    rowEnd: number,
}

const Photo = (props: MyProps) => {
    console.log(props);
    const Figure = styled.figure`
    grid-column-start: ${props.photo.colStart};
    grid-column-end: ${props.photo.colEnd};
    grid-row-start: ${props.rowStart};
    grid-row-end: ${props.rowEnd};
`; 
    return (
        <Figure className={props.className}>
            <Link to={`/photo/${props.photo.id}`}>
                <img src={props.photo.url_c} alt={props.photo.title} />
            </Link>
            <figcaption>{props.photo.title}</figcaption>
        </Figure>
    )
}

export default Photo;