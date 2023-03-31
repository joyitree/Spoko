const music = new Audio ("songs/1.mp3");
//music.play();

const song = [
    {
        id: 1,
        songName: `Baatein ye kabhina-Female<br>
        <div class="subtitle">Palak Muchhal</div>`,
        poster: "picture/1.jpg"
    },
    {
        id: 2,
        songName: `Baaton ko teri<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "picture/2.jpg"
    },
    {
        id: 3,
        songName: `Bhalo lage tomak<br>
        <div class="subtitle">Arijit Singh, Annwesha Dutta Gupta</div>`,
        poster: "picture/3.jpg"
    },
    {
        id: 4,
        songName: `Karone Okarone<br>
        <div class="subtitle">Minar Rahman</div>`,
        poster: "picture/4.jpg"
    },
    {
        id: 5,
        songName: `Dekhechhi Rupsagore<br>
        <div class="subtitle">Mahtim Shakib</div>`,
        poster: "picture/5.jpg"
    },
    {
        id: 6,
        songName: `Teri Deewani<br>
        <div class="subtitle">Sanam Puri</div>`,
        poster: "picture/6.jpg"
    },
    {
        id: 7,
        songName: `Bhalobasar Morshum<br>
        <div class="subtitle">Arijit Singh x Shreya Ghoshal</div>`,
        poster: "picture/7.jpg"
    },
    {
        id: 8,
        songName: `Ik Lamha<br>
        <div class="subtitle">Azaan Sami Khan</div>`,
        poster: "picture/8.jpg"
    },
    {
        id: 9,
        songName: `E vabe golpo hok<br>
        <div class="subtitle">Lagnajita Chakraborty</div>`,
        poster: "picture/9.jpg"
    },
    {
        id: 10,
        songName: `Saajna x Aadat x Sajni <br>
        <div class="subtitle">Jalraj</div>`,
        poster: "picture/10.jpg"
    },
    {
        id: 11,
        songName: `Agar Tum Sath Ho<br>
        <div class="subtitle">Arijit Singh x Alka Yagnik</div>`,
        poster: "picture/11.jpg"
    },
    {
        id: 12,
        songName: `Deewane Hum Nehi Hote<br>
        <div class="subtitle">Aditya Yadav</div>`,
        poster: "picture/12.jpg"
    },
    {
        id: 13,
        songName: `Awara Shaam Hain-Lofi<br>
        <div class="subtitle">Piyush Mehroliyaa.</div>`,
        poster: "picture/13.jpg"
    },
    {
        id: 14,
        songName: `Tu hi Haqeeqat<br>
        <div class="subtitle">Jalraj</div>`,
        poster: "picture/14.jpg"
    },
    {
        id: 15,
        songName: `ek villain x ek villain returns mashup<br>
        <div class="subtitle">unknown</div>`,
        poster: "picture/15.jpg"
    },
    {
        id: 16,
        songName: `Rupkothar Jogote<br>
        <div class="subtitle">Abanti Sithi x Rehaan Rasu</div>`,
        poster: "picture/16.jpg"
    },
    {
        id: 17,
        songName: `Duniyaa<br>
        <div class="subtitle"> Ishan Mitra x Subhankar Dey x Hansika Pareek</div>`,
        poster: "picture/17.jpg"
    },
    {
        id: 18,
        songName: `Mann Mera-Reprise<br>
        <div class="subtitle">Jalraj</div>`,
        poster: "picture/18.jpg"
    },
    {
        id: 19,
        songName: `Tere Liye<br>
        <div class="subtitle">Atif Aslam x Shreya Ghoshal</div>`,
        poster: "picture/19.jpg"
    },
    {
        id: 20,
        songName: `Jeene Bhi De<br>
        <div class="subtitle">Yasser Desai</div>`,
        poster: "picture/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
});


// search data start
let search_results = document.getElementsByClassName('search_results')[0];

song.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `<img src="${poster}" alt="">
                                                <div class="content">
                                                    ${songName}
                                                </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_val=input.value.toUpperCase();
    let items =  search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_val = as.textContent || as.innerHTML;
        
        if (text_val.toUpperCase().indexOf(input_val) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
})
// search data end

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
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
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
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `picture/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href = `songs/${index}.mp3`;

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
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
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
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `picture/${index}.jpg`;
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
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `picture/${index}.jpg`;
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
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
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

