import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(0);

const videoPercentage = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}
const storageVideoTime = localStorage.getItem('videoplayer-current-time');
if (storageVideoTime) {
    player.setCurrentTime(storageVideoTime);
}

player.on('timeupdate', throttle(videoPercentage, 1000));
