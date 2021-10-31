import React, {useState} from 'react';
import './Test.css';
import SpotifyWebApi from 'spotify-web-api-js';
import {getAccessToken} from './authentication';

const spotify = new SpotifyWebApi();
const {access_token} = getAccessToken(window.location.hash);
spotify.setAccessToken(access_token);

function Test() {

//     const[artistOne, setArtist] = useState(null);
//     spotify.getMyTopArtists().then((tracks) => {
//         setArtist(tracks.items.name);
//     });

//     let topArtists = [];
//     spotify.getMyTopArtists().then((artists) => {
//         topArtists = artists.items;
//         console.log(topArtists);
//     }, (err) => {
//         console.log('Error:', err);
//   });


// const [data, setData] = useState({});
// spotify.getUserPlaylists().then((response) => {
//     setData(response.items);
//     console.log(data);
// });
//{data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}

// spotify.getMyTopArtists({
//     limit: 5
// }).then(artists => {
//     console.log('Your 5 most played artists are: ');
//     artists.items.forEach(item => console.log(item.name));
// });

const[playlistOne, setOne] = useState(null);
//const[art, setArt] = useState(null);
spotify.getUserPlaylists().then((playlists) => {
    setOne(playlists?.items[4].id);
    //console.log(playlistOne);
    //setArt(playlists?.items[6].images[0].url)
    });

// const[seedSongs, setSongs] = useState([]);
let seedSongs = [];
spotify.getPlaylistTracks(playlistOne, { 
    limit: 10
}).then(tracks => {
    //console.log('Your Playlist has these songs:');
    // tracks.items.forEach(item => console.log(item.track.artists[0].name));
    tracks.items.forEach(item => seedSongs.push(item.track.id));
    // setSongs(tracks.items.forEach(item => setSongs(item.track.id)));
    console.log('Song Ids:', seedSongs);
}, (err) => {
    console.log('ERROR', err);
});



spotify.getRecommendations({ 
    min_energy: 0.4,
    min_popularity: 20,
    limit: 3,
}).then(songs => {
    console.log('Your song recommndations are:')
    songs.tracks.forEach(song => console.log(song.name));
}, err => {
    console.log('ERROR', err);
});

//Get artist for each song and use getRelatedArtist
//Pull top songs from each related artist
//add to new playlist using createPlaylist


const[nowPlaying, setPlaying] = useState(null);
const[art, setArt] = useState(null);
const[artist, setArtist] = useState(null);
spotify.getMyCurrentPlayingTrack().then((data) => {
  setPlaying(data.item.name);
  setArtist(data.item.artists[0].name);
  setArt(data.item.album.images[0].url);
}, (err) => {
  console.log('ERROR', err);
});

    return (
        <div className="test">
            <h1>{nowPlaying} by {artist}</h1>
            <div className='frame'>
                <img src = {art} alt='' height='500'/>
            </div>
        </div>
    );
}

export default Test;