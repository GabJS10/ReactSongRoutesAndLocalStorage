import React, { useState, useEffect } from 'react';
import SongLyrics from './SongLyrics';
import SongArtist from './SongArtist';
import Message from './Message';
function SongDetails({Artist, Song, title}) {
    if(!Artist || !Song) return 
    return ( <div>
        {Artist.error ? <Message msg={Artist.message} bgColor={"#dc3545"}/> : <SongArtist artist={Artist}/>}
        {Song.error ? <Message msg={Song.message} bgColor={"#dc3545"}/> :<SongLyrics Song={Song} title={title}/>}
    </div> );
}

export default SongDetails;