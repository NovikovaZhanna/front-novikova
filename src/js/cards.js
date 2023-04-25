const cards = [
  {
    title: 'Eat Right For Your Exercise Regime',
    tag: 'Lifestyle',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_1.png',
  },
  {
    title: 'The Look: Perfect Balance',
    tag: 'Lifestyle',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_2.png',
  },
  {
    title: 'Fun Things to Do in Rome',
    tag: 'Style',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_3.png',
  },
  {
    title: '24 Colorful Ceilings That Add Unexpected Contrast to Any Room',
    tag: 'Style',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_4.png',
  },
  {
    title: '9 New Songs to Heat Up Your Fall Playlist',
    tag: 'Lifestyle',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_5.png',
  },
  {
    title: 'What You Need on Your Bedside Table',
    tag: 'Events',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_6.png',
  },
  {
    title: 'When Two Wheels Are Better Than Four',
    tag: 'Travel',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_7.png',
  },
  {
    title: '26 Living Room Ideas from the Homes of Top Designers',
    tag: 'Travel',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_8.png',
  },
  {
    title: 'What Makes Your City’s Style Unique',
    tag: 'Music',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    description:
      'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…',
    image: 'images/cards/card_9.png',
  },
]

function createCard({ tag, title, author, date, views, description, image }) {
  const cardElement = document.createElement('div')
  cardElement.classList.add('card')

  cardElement.insertAdjacentHTML(
    'afterbegin',
    `
      <img src="${image}"
        srcset="${image} 1x, ${image.replace('.png', '@2x.png')} 2x"
      />
      <span class="card-tag">${tag}</span>
      <h2 class="card-title">${title}</h2>
        <div class="card-row">
          <span>${author}</span>•<span>${date}</span>•<span>${views}</span>
        </div>
      <div class="card-description">${description}</div>
    `
  )

  return cardElement
}

const cardElements = cards.map(createCard)
const cardContainer = document.getElementById('cards-container')

cardElements.forEach((cardElement) => {
  cardContainer.append(cardElement)
})
