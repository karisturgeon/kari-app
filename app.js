document.addEventListener('DOMContentLoaded', function() {
    displayRandomGif();
});
//testing

const gifUrls = [
    'https://gifdb.com/images/high/uhm-so-dog-8r6i34311802hy8f.gif',
    'https://i0.wp.com/images.onwardstate.com/uploads/2015/05/oie_14175751vZSQRLEn.gif?fit=650%2C408&ssl=1',
    'https://i.pinimg.com/originals/0f/e7/ba/0fe7ba095b4f3c1779a3c8f35ad857d3.gif',
    'https://media2.giphy.com/media/fpXxIjftmkk9y/200w.gif?cid=6c09b952u39drzkcz0lvb2kdujwd3j1ru5x2kq1xlg6y90k5&ep=v1_gifs_search&rid=200w.gif&ct=g',
    'https://media3.giphy.com/media/GdkCsT3SzN33i/giphy.gif'
];

function displayRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifUrls.length);
    const selectedGifUrl = gifUrls[randomIndex];
    document.getElementById('gif').src = selectedGifUrl;
}
