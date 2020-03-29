interface Owner {
    nsid: string;
    username: string;
    realname: string;
    location: string;
    iconserver: string;
    iconfarm: number;
    path_alias: string;
}

interface Title {
    _content: string;
}

interface Description {
    _content: string;
}

interface Visibility {
    ispublic: number;
    isfriend: number;
    isfamily: number;
}

interface Dates {
    posted: string;
    taken: string;
    takengranularity: number;
    takenunknown: number;
    lastupdate: string;
}

interface Editability {
    cancomment: number;
    canaddmeta: number;
}

interface Publiceditability {
    cancomment: number;
    canaddmeta: number;
}

interface Usage {
    candownload: number;
    canblog: number;
    canprint: number;
    canshare: number;
}

interface Comments {
    _content: number;
}

interface Notes {
    note: any[];
}

interface People {
    haspeople: number;
}

interface Tags {
    tag: any[];
}

interface Url {
    type: string;
    _content: string;
}

interface Urls {
    url: Url[];
}

export interface DetailsPhotos {
    id: string;
    secret: string;
    server: string;
    farm: number;
    dateuploaded: string;
    isfavorite: number;
    license: number;
    safety_level: number;
    rotation: number;
    originalsecret: string;
    originalformat: string;
    owner: Owner;
    title: Title;
    description: Description;
    visibility: Visibility;
    dates: Dates;
    views: number;
    editability: Editability;
    publiceditability: Publiceditability;
    usage: Usage;
    comments: Comments;
    notes: Notes;
    people: People;
    tags: Tags;
    urls: Urls;
    media: string;
}