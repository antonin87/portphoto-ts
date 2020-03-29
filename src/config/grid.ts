import { Coordinates } from '../models/Photo';

export const getCoordinates = (nbLandscape: number, nbPortrait: number): Coordinates[] => {
let coordinates: Coordinates[] = [];
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