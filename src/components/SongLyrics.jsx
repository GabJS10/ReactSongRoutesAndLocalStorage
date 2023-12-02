import React, { useState, useEffect } from 'react';


function SongLyrics({Song,title}) {
  if(!Song && !title) return;
    return ( <section>
        <h3>{title.song}</h3>
        <blockquote style={{ whiteSpace: "pre-wrap" }}>{Song}</blockquote>
      </section>);
}

export default SongLyrics;