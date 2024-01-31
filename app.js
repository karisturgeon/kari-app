document.addEventListener('DOMContentLoaded', function() {
    displayRandomGif();
});

const gifUrls = [
    'https://gifdb.com/images/high/uhm-so-dog-8r6i34311802hy8f.gif',
    'https://i0.wp.com/images.onwardstate.com/uploads/2015/05/oie_14175751vZSQRLEn.gif?fit=650%2C408&ssl=1',
    'https://i.pinimg.com/originals/0f/e7/ba/0fe7ba095b4f3c1779a3c8f35ad857d3.gif'
];

function displayRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifUrls.length);
    const selectedGifUrl = gifUrls[randomIndex];
    document.getElementById('gif').src = selectedGifUrl;
}
