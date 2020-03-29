export const KEY = 'YOUR_KEY';
export const USER_ID = 'YOUR_USER_ID';
export const DELAY_TRANSITION_PHOTO = 1000;
export const HEIGHT_GAP_GRID = 4;
export const PHOTO_PER_PAGE = 15;
export const URL_API_ALL_PHOTOS = `https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1&per_page=%%photo_per_page%%&extras=url_o,url_c`;
export const URL_API_DETAIL_PHOTO = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${KEY}&photo_id=%%id%%&format=json&nojsoncallback=1`;
export const URL_API_EXIF_PHOTO = `https://www.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=${KEY}&photo_id=%%id%%&format=json&nojsoncallback=1`;