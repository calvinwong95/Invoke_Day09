var sng = document.getElementById('sng');
var timeBar = document.getElementById('timeBar');


var songList = {
    src: 'undefined',
    title: 'Happy Birthday',
    artist: 'Justin Bieber',
    
}

var songList2 = {
    src: 'audio/littlebit.mp3',
    title: 'Little Bit',
    artist: 'Baba Blacksheep',

}


function playSng() {
    sng.play();
}

function pauseSng() {
    sng.pause();
}



setInterval (checkTime, 1000);
function checkTime() {

    var songDuration = Math.round(sng.duration);

    var songCurrentTime = Math.round(sng.currentTime);

    // console.log("song duration: ", songDuration)

    var timeBarWidth = (( songCurrentTime/songDuration) * 100);

    var clrR = Math.floor(Math.random()* 255 );
    var clrG = (Math.floor(Math.random()* 255 )).toFixed(2); 
    var clrB = (Math.random()* 155 ) + 100; 


    // console.log("R: " + clrR + ", G: "+ clrG +", B: " + clrB);

    //template string//
    // console.log(`R: ${clrR}, G: ${clrG}, B: ${clrB}`);
    
    timeBar.style.width = timeBarWidth + '%';
    timeBar.style.backgroundColor = `rgb(${clrR},${clrG},${clrB})`;
}


function getSong (songData) {
//     if (songData == 'songList') {
//         console.log(songList.src);
//     } else if (songData == 'songList2') {
//         console.log(songList2.src);
//     }

    switch(songData) {
        case 'songList': 
            console.log(songList.src);
            sng.src = songList.src;
            document.getElementById("titleText").innerHTML = songList.title;
            document.getElementById("artistText").innerHTML = songList.artist;
            break;
        
        case 'songList2':
            console.log(songList2.src);
            sng.src = songList2.src;
            document.getElementById("titleText").innerHTML = songList2.title;
            break;

        default: 
            console.log("show default");
            break;

    }

}