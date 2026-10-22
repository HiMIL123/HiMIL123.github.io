// Function to handle playing the audio clip urls
function playSound(audioUrl) {
    const player = document.getElementById('global-audio-player');
    
    // Assign the new streaming source URL to the tag
    player.src = audioUrl;
    
    // Play the audio asset file
    player.play()
        .then(() => {
            console.log("Playing sound asset from source: " + audioUrl);
        })
        .catch(error => {
            console.error("Playback failed. Interaction must occur first:", error);
        });
}

// Function to copy asset strings or links to user device clipboards
function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied link system resource text directly to clipboard: " + textToCopy);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
