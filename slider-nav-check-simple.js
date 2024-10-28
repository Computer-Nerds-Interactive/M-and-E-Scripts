document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.project_images-collection-item');
    const numOfImages = images.length;
    const sliderArrows = document.querySelectorAll('.arrow-mask');
    const sliderDots = document.querySelector('.slide-nav_project-O');

    console.log(`There are ${numOfImages} images in the collection list`);

    const sliderNavCheck = () => {
        if (numOfImages > 1) {
            console.log('More than one image. Keep Nav');
        } else {
            sliderArrows.forEach(element => {
                element.style.display = 'none';
            });
            if (sliderDots) {
                sliderDots.style.display = 'none';
            }
        }
    };

    // Call the function to run it
    sliderNavCheck();
});
