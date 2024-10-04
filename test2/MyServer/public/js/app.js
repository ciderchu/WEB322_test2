/**
 * WEB222 – Assignment 6
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sin Kau Chu
 *      Student ID: 155131220
 *      Date of modificatin:       7 Aug, 2024
 */

// for the assignment 6

document.addEventListener("DOMContentLoaded", () => {
  const formMessage = document.getElementById("formMessage");
  const formbtn = document.getElementById("newsletterButton");

  formbtn.addEventListener("click", async () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please input a valid email address!";
      formMessage.style.color = "red";
      formMessage.style.fontWeight = "bold";
      return;
    }
  });
});

// end of assignment 6

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

// document.addEventListener("DOMContentLoaded", () => {
const menu = document.querySelector("#menu");
const artistTitle = document.querySelector("#selected-artist");
// const songsTableBody = document.querySelector("#songs");

// add button to select artist in nav
artists.forEach((artist) => {
  const button = document.createElement("button");
  button.textContent = artist.name;
  button.id = artist.artistId;
  menu.appendChild(button);
  button.addEventListener("click", () => showSongList(artist.artistId));
});
// });

// Create the + button and append it to the menu (assignment 6)
const addButton = document.createElement("button");
addButton.textContent = "New";
addButton.id = "add-artist-button";
addButton.onclick = () => (location.href = "./add-artist");
menu.appendChild(addButton);

if (artists.length > 0) {
  showSongList(artists[0].artistId);
}

// Create function to show
function showSongList(artistId) {
  const artistToshow = artists.find((a) => a.artistId === artistId);
  artistTitle.textContent = artistToshow.name;
  let leftB = document.createElement("span");
  let rightB = document.createElement("span");
  leftB.textContent = " ( ";
  rightB.textContent = " )";

  artistTitle.appendChild(leftB);

  artistToshow.urls.forEach((u, index) => {
    let artistInfo = document.createElement("a");

    // Check if the current index is the last index in the array
    if (index === artistToshow.urls.length - 1) {
      artistInfo.textContent = ` ${u.name}`;
    } else {
      artistInfo.textContent = ` ${u.name} |`;
    }

    artistInfo.href = u.url;
    artistInfo.target = "_blank";
    artistTitle.appendChild(artistInfo);
  });

  artistTitle.appendChild(rightB);

  // creating song table head
  // const thead = document.querySelector("thead");
  // thead.innerHTML = "";
  // const headers = ["Songs"];
  // headers.forEach((headerText) => {
  //   const th = document.createElement("th");
  //   th.textContent = headerText;
  //   thead.appendChild(th);
  // });

  // creating the song table body
  const songCardContainer = document.querySelector(".songCardContainer");
  songCardContainer.innerHTML = "";

  const artistSongs = songs.filter((s) => s.artistId === artistId && s.explicit === false);

  artistSongs.forEach((song) => {
    const songCard = document.createElement("article");
    const songThumb = document.createElement("img");
    const songName = document.createElement("span");
    const year = document.createElement("span");
    const duration = document.createElement("span");
    const songLink = document.createElement("a");

    songCard.classList.add("songCard");
    songThumb.classList.add("songThumb");
    songName.classList.add("songName");
    year.classList.add("songYear");
    duration.classList.add("songDuration");

    songThumb.src = song.imageUrl;
    songName.textContent = song.title;
    year.textContent = song.year;
    songLink.href = song.url;
    songLink.target = "_blank";

    // Formatting the duration to mm:ss
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    const durationCal = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    duration.textContent = durationCal;
    songLink.appendChild(songThumb);
    songCard.appendChild(songLink);
    songCard.appendChild(songName);
    songCard.appendChild(year);
    songCard.appendChild(duration);
    songCardContainer.appendChild(songCard);
  });
}
