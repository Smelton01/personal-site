// TODO Add a couple lines about each project
const data = [
  {
    title: 'OCR Sudoku',
    subtitle: 'React + Flask personal project',
    image: '/images/projects/sudoku.jpg',
    date: '2020-12-20',
    desc:
      'Sudoku app uses OpenCV based OCR network to read Sudoku grid from uploaded image. '
      + 'Allows users to play uploaded grid and visualize the solution obtained, '
      + 'through the backtracking algorithm. ',
  },
  {
    title: 'FUK NOW Classifieds',
    subtitle: 'AI, React, algirithm solving project',
    link: 'https://fuknowclass.herokuapp.com',
    image: '/images/projects/fuk.png',
    date: '2021-01-20',
    desc:
      'App allows users to input their name and email address to subscribe '
      + 'for updates when new posts are made to the Fukuoka-now Classified section, '
      + 'a platform for foreign residents of the city to buy and sell used goods. '
      + 'Web scraping, email server, database management, web app.',
  },
  {
    title: 'Barney bot',
    subtitle: 'A twitter bot',
    link: 'https://github.com/Smelton01/Barney-Bot',
    image: '/images/projects/spacepotato.jpg',
    date: '2020-04-13',
    desc:
      'A twitter bot designed to respond to posts about the How I Met Your Mother '
      + 'TV show. The bot responses are based on an Recurrent Neural Network based '
      + 'on the script from the entire 9 seasons of the show, scraped from IMDB.',
  },
  {
    title: 'URLs',
    subtitle: 'A URL shortener microservice',
    image: '/images/projects/urlz.png',
    link: 'https://urls.simonjuba.repl.co',
    date: '2021-05-01',
    desc:
      'A URL shortener microservice designed using express.js. '
      + 'Post requests made to the API are responded to with the '
      + 'shortened url. A valid url with the aapi as base will be '
      + 'redirected to the original url saved in the database',
  },
  {
    title: 'Tower of Hanoi',
    subtitle: 'A react implementation of the tower of hanoi game',
    image: '/images/projects/hanoi.png',
    link: 'https://hanoii.herokuapp.com/',
    date: '2021-07-19',
    desc:
      'A Tower of Hanoi webapp developed with react components. '
      + 'Adjust difficulty by changing the number of dics to move. '
      + 'Move all discs from one pole to another without placing a  '
      + 'larger disc on top of a small one. Time your perfomance and '
      + 'see where you rank in a global leaderboard',
  },
];

export default data;
