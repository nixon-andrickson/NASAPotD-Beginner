//Fetch using NASA API
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const img = document.querySelector('img')
const iframe = document.querySelector('iframe')
const h3 = document.querySelector('h3')

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
//----------RESET WEBPAGE INBETWEEN CLICKS----------
    h1.innerText = `Nasa's Picture of the Day`
    h2.innerText = ``
    img.src = ``
    img.classList.add('invis')
    iframe.src =``
    iframe.classList.add('invis')
    h3.innerText = ``
    h3.classList.add('invis')
//----------RESET WEBPAGE INBETWEEN CLICKS----------

    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        h1.innerText = data.date
        h2.innerText = data.title
        if (data.media_type === `image`) {
            img.src = data.hdurl
            document.querySelector('img.invis').classList.remove('invis')
        }
        if (data.media_type === `video`) {
            iframe.src = data.url
            document.querySelector('iframe.invis').classList.remove('invis')
        }
        if (data.explanation.length > 0) {
            h3.innerText = data.explanation
            document.querySelector('h3.invis').classList.remove('invis')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

