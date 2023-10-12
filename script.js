function playUploadedSong() {
    const musicPlayer = document.getElementById('musicPlayer');
    const fileInput = document.getElementById('fileInput');
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        musicPlayer.src = objectURL;
    }
}