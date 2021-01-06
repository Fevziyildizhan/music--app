  const img_el = document.getElementById("song-image");
  const title_el = document.getElementById("song-title");
  const artist_el = document.getElementById("song-artist");
  const song_next_up = document.getElementById("song-next-up");

  const prev_btn = document.getElementById("prev-btn");
  const play_btn = document.getElementById("play-btn");
  const next_btn = document.getElementById("next-btn");
  const play_icon = document.getElementById("play-icon");

  const music_player = document.getElementById("music-player");

 

  let current_index;
  let next_song_index;

  let songs = [
    {
      title: "Milli Takım Marşı",
      artist: "Reymen",
      song_path: "TAM VERSİYON Türkiye İçin El Ele (Petlas Basketbol Milli Takım Resmi Sponsoru Marşı).mp3",
      img_path: "",
    },
    {
      title: "Aslan Marşı",
      artist: "Şehinşah",
      song_path: "Şehinşah - Aslan Marşı.mp3",
      img_path: "",
    },
    {
      title: "Afyonspor",
      artist: "Mithat Köreler",
      song_path: "Mithat Körler - Şampiyon Afyonspor Marşı.mp3",
      img_path: "",
    },
  ];

  initPlayer();

  function initPlayer() {
    current_index = 0;
    next_song_index = current_index + 1;

    UpdatePlayer();
  }

  function UpdatePlayer() {
    let song = songs[current_index];

    img_el.style = "background-image : url('" + song.img_path + "')";
    title_el.innerText = song.title;
    artist_el.innerText = song.artist;

    song_next_up.innerText =
      songs[next_song_index].title + " by " + songs[next_song_index].artist;

    music_player.src = song.song_path;
  }

  play_btn.addEventListener("click",ToggleSong);

  next_btn.addEventListener("click", ()=>ChangeSong());
  prev_btn.addEventListener("click", ()=>ChangeSong(false))

  function ToggleSong() {
    if (music_player.paused) {
       music_player.play();
      play_icon.classList.remove("fa-play");
      play_icon.classList.add("fa-pause");
    } else {
      music_player.pause();
      play_icon.classList.add("fa-play");
      play_icon.classList.remove("fa-pause");
    }
  }

  function ChangeSong(next = true) {
    if (next) {
      current_index++;
      next_song_index = current_index + 1;
      if (current_index > songs.length - 1) {
        current_index = 0;
        next_song_index = current_index + 1;
      }
      if (current_index > songs.length - 1) {
        next_song_index = 0;
      }
    } else {
      current_index--;
      next_song_index = current_index + 1;

      if (current_index < 0) {
        current_index = songs.length - 1;
        next_song_index = 0;
      }
    }
    UpdatePlayer();
    ToggleSong();
  }

