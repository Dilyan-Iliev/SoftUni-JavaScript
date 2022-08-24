function gramophone(band, album, song) {
    let bandLength = band.length;
    let albumLength = album.length;
    let songLength = song.length;

    let songDuration = (albumLength * bandLength) * songLength / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')