console.log("Heh penis")

let songElement = document.getElementById("my-song")
let songImageElement = document.getElementById("song-thumbnail")

async function updateSongs() {
    let request = await fetch("https://lastfm-last-played.biancarosa.com.br/jameowie/latest-song");
    let data = await request.json();

    songElement.innerText = data["track"]["name"] + " - " + data["track"]["artist"]["#text"];

    songImageElement.src = data["track"]["image"][2]["#text"];
    console.log(data)
}

updateSongs();