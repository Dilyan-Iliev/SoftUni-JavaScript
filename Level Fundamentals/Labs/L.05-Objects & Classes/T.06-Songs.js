function filterTheSongs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = array.shift();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let currentSong = array[i].split('_');
        let typeList = currentSong[0];
        let name = currentSong[1];
        let time = currentSong[2];

        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    let criteria = array[array.length - 1];

    if (criteria === 'all') {
        songs.forEach(x => console.log(x.name));
    }
    else {
        let filteredSongs = songs.filter(x => x.typeList === criteria);
        filteredSongs.forEach(x => console.log(x.name));
    }
}
filterTheSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)