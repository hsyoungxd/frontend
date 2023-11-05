document.addEventListener("DOMContentLoaded", function() {
    // Create an array to hold audio elements
    const aud1 = document.createElement("audio");
    const aud2 = document.createElement("audio");
    const aud3 = document.createElement("audio");
    aud1.style.display="none";
    aud2.style.display="none";
    aud3.style.display="none";
    const audioElements = [aud1, aud2, aud3];

    audioElements[0].src = "mp3/BLACKPINK_Shut_Down.mp3"; 
    audioElements[1].src = "mp3/LE_Sserafim_Unforgiven.mp3"; 
    audioElements[2].src = "mp3/Aespa_Spicy.mp3"; 

    audioElements.forEach(audioElement => {
        audioElement.controls = true;
        audioElement.classList.add("custom-audio");
    });

    const carouselItems = document.querySelectorAll(".carousel-item");

    audioElements.forEach((audioElement, index) => {
        if (index < carouselItems.length) {
            carouselItems[index].appendChild(audioElement);
        }
    });
    let currentAudioElement = audioElements[0];

    document.addEventListener("keypress", function(event) {
        if (event.key === "\\") {
            if (currentAudioElement.paused) {
                currentAudioElement.play();
            } else {
                currentAudioElement.pause();
            }
        }
    });

    document.getElementById("demo").addEventListener("slid.bs.carousel", function(e) {
        const currentCarouselIndex = e.to;
        currentAudioElement.pause();
        if (currentCarouselIndex < audioElements.length) {
            currentAudioElement = audioElements[currentCarouselIndex];
            if (!currentAudioElement.paused) {
                currentAudioElement.play();
            }
        }
    });
});
