const music = new Audio ("songs/1.mp3");
//music.play();

const song = [
    {
        id: 1,
        songName: `Lambiyan si Judaiyan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "picture/arijit/1.jpg"
    },
    {
        id: 2,
        songName: `Oboseshe<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "picture/arijit/2.jpg"
    },
    {
        id: 3,
        songName: `Baaton ko Teri<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "picture/arijit/3.jpg"
    },
    {
        id: 4,
        songName: `Bhalobasar Morshum<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "picture/arijit/4.jpg"
    },
    {
        id: 5,
        songName: `Khamoshiyan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "picture/arijit/5.jpg"
    },
    // {
    //     id: 6,
    //     songName: `Agar Tum Sath Ho<br>
    //     <div class="subtitle">Arijit Singh x Alka Yagnik</div>`,
    //     poster: "picture/arijit/6.jpg"
    // },
    // {
    //     id: 7,
    //     songName: `Deewane Hum Nehi Hote<br>
    //     <div class="subtitle">Aditya Yadav</div>`,
    //     poster: "picture/arijit/7.jpg"
    // },
    // {
    //     id: 8,
    //     songName: `Awara Shaam Hain-Lofi<br>
    //     <div class="subtitle">Piyush Mehroliyaa.</div>`,
    //     poster: "picture/arijit/8.jpg"
    // },
    // {
    //     id: 9,
    //     songName: `Tu hi Haqeeqat<br>
    //     <div class="subtitle">Jalraj</div>`,
    //     poster: "picture/arijit/9.jpg"
    // },
    // {
    //     id: 10,
    //     songName: `ek villain x ek villain returns mashup<br>
    //     <div class="subtitle">unknown</div>`,
    //     poster: "picture/arijit/10.jpg"
    // },
]


Array.from(document.getElementsByClassName('songItem1')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <= 0)
    {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
    }
    else
    {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});



const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem1')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    });
};





let index=0;
// index++;
// console.log(index);

let poster_master_play = document.getElementById('poster-master-play');
let download_music = document.getElementById('dowload-music');
let title  = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e) =>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `songs/arijit/${index}.mp3`;
        poster_master_play.src = `picture/arijit/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href = `songs/arijit/${index}.mp3`;

        let songTitles = song.filter((ele) =>{
            return ele.id == index;
        });

        songTitles.forEach((elss) =>{
            let {songName} = elss;
            title.innerHTML = songName;
            // download music name
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem1'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');


    });
});


let currentStrart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    // console.log(sec1);
    // for 2 digits in second
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStrart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar= document.getElementsByClassName('vol-bar')[0];
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value > 50)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
// index = Array.from(document.getElementsByClassName('songItem')).length;
// console.log(20);

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem1')).length;
    }
    music.src = `songs/arijit/${index}.mp3`;
    poster_master_play.src = `picture/arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles = song.filter((ele) =>{
        return ele.id == index;
    });

    songTitles.forEach((elss) =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem1'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem1')).length){
        index = 1;
    }
    music.src = `songs/arijit/${index}.mp3`;
    poster_master_play.src = `picture/arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles = song.filter((ele) =>{
        return ele.id == index;
    });

    songTitles.forEach((elss) =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem1'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

