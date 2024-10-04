document.addEventListener("DOMContentLoaded", () => {
  const addSocialMediaButton = document.getElementById("addSocialMediaButton");
  const socialMediaContainer = document.getElementById("socialMediaContainer");
  const addSongButton = document.getElementById("addSongButton");
  const exampleSongsContainer = document.getElementById("exampleSongsContainer");

  // Function to remove an input field
  window.removeInput = (button) => {
    button.parentElement.remove();
  };

  // Function to add a new social media URL input field
  addSocialMediaButton.addEventListener("click", () => {
    const newInputContainer = document.createElement("div");
    newInputContainer.classList.add("input-container");
    newInputContainer.innerHTML = `
        <input type="url" name="socialMediaUrls" placeholder="Enter a social media URL" required />
        <button type="button" class="remove-button" onclick="removeInput(this)">Remove</button>
      `;
    socialMediaContainer.appendChild(newInputContainer);
  });

  // Function to add a new song/video URL input field
  addSongButton.addEventListener("click", () => {
    const newInputContainer = document.createElement("div");
    newInputContainer.classList.add("input-container");
    newInputContainer.innerHTML = `
        <input type="url" name="exampleSongs" placeholder="Enter a song/video URL" required />
        <button type="button" class="remove-button" onclick="removeInput(this)">Remove</button>
      `;
    exampleSongsContainer.appendChild(newInputContainer);
  });
});
