const imgSource = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg" ];

const randomBgImg = imgSource[Math.floor(Math.random()*imgSource.length)];
const bgImg = document.createElement("div");

bgImg.style.background = `center url(img/${randomBgImg})`;
bgImg.className = "bgimg";
document.body.appendChild(bgImg);

//const bgImg = document.createElement("img");
// bgImg.src = `img/${randomBgImg}`;
// bgImg.className = "background";
// document.body.appendChild(bgImg);
