interface AudioPlayer{
    audioVolume: number,
    songDuration: number,
    song: string;
    details:Details;
}
interface Details{
    author: string;
    year:number;
}
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeren",
        year: 2015
    }
}
//const song = 'New Song';
const {
    song:anotherSong,
    songDuration:duration,
    details } = audioPlayer;
const{ author } = details;

//const { author:authorMusic } = audioPlayer.details;

//console.log('Song: ' , anotherSong);
//console.log('Duration: ' ,duration)
//console.log('Author: ' ,authorMusic);
//console.log('Author: ' , author )

const [,,trunks = 'Not found']: string[] = ['Goku','Vegeta'];
//const trunks = dbz[3] || 'No hay personaje';
//console.log('Personake 3:', dbz[3] || 'No hay personaje');
console.log('Personaje 3:',trunks)
export{};