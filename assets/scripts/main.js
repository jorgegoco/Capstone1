const speakers = [
  {
    image_url: './assets/images/speaker_01.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professor of Entrepreneurial Legal Studies of Harvard Law School',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
  },
  {
    image_url: './assets/images/speaker_02.png',
    name: 'Kilnam Chon',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
  },
  {
    image_url: './assets/images/speaker_03.png',
    name: 'SohYeong Noh',
    position: 'Computer Scientist',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
  },
  {
    image_url: './assets/images/speaker_04.png',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
  },
  {
    image_url: './assets/images/speaker_05.png',
    name: 'Lila Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
  },
  {
    image_url: './assets/images/speaker_06.png',
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
  },
];

for(let i = 0; i < speakers.length; i += 1) {
  const speakersAll = document.querySelector('.speakers-all');
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  const speakerImage = document.createElement('img');
  speakerImage.alt = `${speakers[i].name}`;
  speakerImage.src = `${speakers[i].image_url}`;
  speaker.appendChild(speakerImage);
  const speakerData = document.createElement('div');
  speakerData.className = 'speaker-data';
  const speakerName = document.createElement('h3');
  speakerName.className = 'speaker-name';
  const speakerNameText = document.createTextNode(`${speakers[i].name}`);
  speakerName.appendChild(speakerNameText);
  speakerData.appendChild(speakerName);
  const speakerPosition = document.createElement('p');
  speakerPosition.className = 'speaker-position';
  const speakerPositionText = document.createTextNode(`${speakers[i].position}`);
  speakerPosition.appendChild(speakerPositionText);
  speakerData.appendChild(speakerPosition);
  const breakLine = document.createElement('hr');
  breakLine.className = 'grey-line';
  speakerData.appendChild(breakLine);
  const speakerParagraph = document.createElement('p');
  speakerParagraph.className = 'speaker-paragraph';
  const speakerParagraphText = document.createTextNode(`${speakers[i].paragraph}`);
  speakerParagraph.appendChild(speakerParagraphText);
  speakerData.appendChild(speakerParagraph);
  speaker.appendChild(speakerData);
  speakersAll.appendChild(speaker);
}

function showMenu() {
  document.querySelector('.main-page').style.display = 'none';
  document.querySelector('.mobile-popup-menu').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.main-page').style.display = 'block';
  document.querySelector('.mobile-popup-menu').style.display = 'none';
}

document.querySelector('.fa-bars').addEventListener('click', showMenu);
document.querySelector('#close-button').addEventListener('click', hideMenu);
