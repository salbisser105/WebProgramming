//Property methods 
const player = {
    play: function(id){
        console.log('Playing song with id: ${id}')
    },
    pause: function(){
        console.log('Pause song..')
    },
    createPlayList: function(name){
        console.log('creating playlist: ${name}')
    },
    playPlaylist: function(name){
        console.log('playing playlist: ${name}')
    },
}
player.deleteSong = function(id){
    console.log ('deleting song: ${id}')
}

player.play(3840);
player.pause();
player.deleteSong(20);
player.createPlayList('Techno');
player.playPlaylist('Techno');

console.log(player);
