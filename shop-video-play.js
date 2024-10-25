  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("shop-video");

    if (video) {
      // Pause the video on initial load
      video.pause();

      // Set up Intersection Observer to observe when the video enters the viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play(); // Play the video when it enters the viewport
          } else {
            video.pause(); // Pause the video when it leaves the viewport
          }
        });
      });

      // Start observing the video element
      observer.observe(video);
    }
  });