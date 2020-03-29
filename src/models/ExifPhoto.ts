    interface Raw {
        _content: string | number;
    }

    interface Clean {
        _content: string;
    }

    export interface Exif {
        tagspace: string;
        tagspaceid: number;
        tag: string;
        label: string;
        raw: Raw;
        clean?: Clean;
    }

    export interface ExifPhoto {
        id: string;
        secret: string;
        server: string;
        farm: number;
        camera: string;
        exif: Exif[];
    }

