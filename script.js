var info = [
  {
    year: "",
    url: ""
  },
  {
    year: "1949г S 170. Мощность 52 л.с. Максимальная скорость 120 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392293340_mercedes-s-170-1949.jpg"
  },
  {
    year: "1952 Mercedes S 300 'Аденауэр'. Мощностью 115 л.с. Максимальной скоростью 160 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392293367_mercedes-300-adenauer.jpg"
  },
  {
    year: "1961 Mercedes 300 SE. Максимальной скоростью 200 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392293493_mercedes-300-se-1961.jpg"
  },
  {
    year: "1965 Mercedes S 250. Мощностью 130 л.с. Максимальной скоростью 190 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392293613_mercedes-s-250-1965.jpg"
  },
  {
    year: "1968 Mercedes 300 SEL 6.3. Максимальной скоростью 220 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392293638_mercedes-300-sel-6.3-1968-2.jpg"
  },
  {
    year: "1992 Mercedes 300 SE 2.8. Мощностью 193 л.с. Максимальной скоростью 230 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392307131_mercedes-300-se-2.8-1992.jpg"
  },
  {
    year: "1998 Mercedes S 600 Long. Мощностью 367 л.с. Максимальной скоростью 250 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392307220_mercedes-s-600-lang-1998.jpg"
  },
  {
    year: "2005 Mercedes W 221. Мощностью 240+ л.с. Максимальной скоростью 250 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392307284_mercedes-w-221-2005.jpg"
  },
  {
    year: "2013 Mercedes W 222. Мощностью 400+ л.с. Максимальной скоростью 250 км/час.",
    url: "http://www.1gai.ru/uploads/posts/2014-02/thumbs/1392307373_mercedes-w-222-2013.jpg"
  }
]

document.body.style.backgroundImage = 'url(https://bipbap.ru/wp-content/uploads/2017/05/879142.jpg'
var elem = document.createElement("p")
document.body.appendChild(elem)
elem.style = `
    width:70%;
    margin: 0 auto;
`
elem.innerHTML = "Mercedes-Benz"
elem.style.color = "#FA8072"
var divSimvol = document.createElement ("div")
divSimvol.style = `
    height: 250px;
    width: 80%;
    margin: 0 auto;
  `
  document.body.appendChild (divSimvol)
var picture = document.createElement ("img")
	divSimvol.appendChild(picture)
picture.src = ' http://pngimg.com/uploads/car_logo/car_logo_PNG1655.png'
picture.width ="200"
picture.style.transition = "all 2s"
picture.onmouseover = function (event){
	  console.log (event)
}
picture.onmouseover = function (event){
	  console.log (event.target)
  	console.log (event.type)
  	console.log (event.clientX)
	  console.log (event.clientY)
}
picture.onmouseover = function (event){
  	event.target.style.width = "295px"
  	this.style.transform = "rotate(-360deg)"
}
picture.onmouseout = function (event){
  	event.target.style.width = "200px"
  	this.style.transform = "rotate(360deg)"
}
var option = info.map (
    function (car) {
      return car.year
    }
)
var pictures = info.map (
    function (car){
      return car.url
    }
)
var divButton = document.createElement ("div")
document.body.appendChild (divButton)
divButton.style = `
    margin: 0 auto;
    width: 70%;
`
var button = document.createElement ("button")
divButton.appendChild(button)
button.innerText = "Click me"
button.style.background='#98FB98'

var divKartinka = document.createElement ("div")
document.body.appendChild (divKartinka)
divKartinka.style = `
    margin: 0 auto;
    width: 80%;
`
var text = document.createElement ("p")
divKartinka.appendChild (text)
var kartinka = document.createElement ("img")
divKartinka.appendChild (kartinka)
var currentPicture = 0
var currentText = 0
text.style.color = "#D3D3D3"
button.onclick = function (event){
    currentPicture = currentPicture < pictures.length-1 ? currentPicture+1:0
		kartinka.src = pictures [currentPicture]
    currentText = currentText < option.length-1 ? currentText+1:0
		text.innerText = option [currentText]
}
