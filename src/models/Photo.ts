export interface Photo {
    id: string,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    isPublic: number,
    isfriend: number
    isfamily: number,
    width_c: number,
    width_o: number,
    height_c: number,
    url_c: string,
    url_o: string,
    colStart: number,
    colEnd: number
};

/**
 * Photo coordinates to display on grid
 */
type CoordinateProperties = {
    colStart: number,
    colEnd: number  
};

export type Coordinates = {
    [prop:string]: CoordinateProperties[],
};
