var sng = document.getElementById("sng");

var vol = 1;

var width = 90;



var i = 5;

var isPlaying = false;

var songList1 = {
    src:'audio/bgmusic.mp3',
    title:'Oceania' ,
    artist:'Barry Allen' ,
    background: 'url(background1.jpg)' ,
}
var songList2 =  {
    src:'audio/bloop.mp3' ,
    title:'Genesis' ,
    artist:'Tom Baker' ,
    background:'url(background2.jpg)' ,
}
var songList3 = {
    src:'audio/click.mp3',
    title:'Exodus' ,
    artist:'Mark Jonas' ,
    background:'url(background3.jpg)',
}
var songList4 =  {
    src:'audio/littlebit.mp3',
    title:'Numbers',
    artist:'Arwin Arjun',
    background:'url(background4.jpg)',
}




document.getElementById("play-stop").addEventListener('mouseover', hoverbtn);
document.getElementById("volume-up").addEventListener('mouseover', hoverbtn);
document.getElementById("volume-down").addEventListener('mouseover', hoverbtn);

function hoverbtn() {
    this.style.transform="scale(1.5)";
}

document.getElementById("play-stop").addEventListener('mouseout', hoveraway);
document.getElementById("volume-up").addEventListener('mouseout', hoveraway);
document.getElementById("volume-down").addEventListener('mouseout', hoveraway);

function hoveraway() {
    this.style.transform="scale(1)";
}

function playSwitch() {
    if (isPlaying == false) {
        sng.play();
        isPlaying = true;
        document.getElementById('play-stop').innerHTML ="<i class='fas fa-pause fadeAnimate'></i>";
        
    } else if (isPlaying == true) {
        sng.pause();
        isPlaying = false;
        document.getElementById('play-stop').innerHTML ="<i class='fas fa-play fadeAnimate'></i>";
    }
}

function volChange(num) {

    vol = vol + num;

    if (vol >= 1) {
        vol = 1;
    } else if (vol <=0) {
        vol = 0;
    }

    console.log(vol);
    sng.volume = vol;

}

function barChange(num) {
    i = i + num;

    if (i > 5) {
        i = 5;
    } else if ( i < 1) {
        i = 1;
    }

    if (num < 0) {
        let j = i + 1;
        document.getElementById(j).style.opacity = 0;
    }

    if (num > 0) {
        
        document.getElementById(i).style.opacity = 1;
    }


}




function getSong(songData) {

    switch(songData) {
        case 'songList1' :
            console.log(songList1.src);
            sng.src = songList1.src;
            document.getElementById("songTitle").innerHTML = songList1.title;
            document.getElementById("songArtist").innerHTML = songList1.artist;
            document.getElementById('container-video').style.backgroundImage = songList1.background
            break;
        
        case 'songList2' :
            console.log(songList2.src);
            sng.src = songList2.src;
            document.getElementById("songTitle").innerHTML = songList2.title;
            document.getElementById("songArtist").innerHTML = songList2.artist;
            document.getElementById('container-video').style.backgroundImage = songList2.background
            break;

        case 'songList3' :
            console.log(songList3.src);
            sng.src = songList3.src;
            document.getElementById("songTitle").innerHTML = songList3.title;
            document.getElementById("songArtist").innerHTML = songList3.artist;
            document.getElementById('container-video').style.backgroundImage = songList3.background
            break;

        case 'songList4' :
            console.log(songList4.src);
            sng.src = songList4.src;
            document.getElementById("songTitle").innerHTML = songList4.title;
            document.getElementById("songArtist").innerHTML = songList4.artist;
            document.getElementById('container-video').style.backgroundImage = songList4.background
            break;
    }
}