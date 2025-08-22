type Member = {
  name: string
  image: string
  position: string
  hoverText: string
  joinedCompanyDate: string
}

const team: Member[] = [
  {
    name: 'Teodosiy Teodosiev',
    image: '/images/team/Teo.jpg',
    position: 'CEO',
    hoverText:
      'YC alumni, Brother of Presiyan, in relationship with the CFO, dever of the Product Designer. Father.',
    joinedCompanyDate: '10/10/2007',
  },
  {
    image: '/images/team/Gogo.jpg',
    name: 'Goran Stoyanov',
    position: 'Managing partner',
    hoverText:
      'Troublemaker, Jack of all trades (master of none), Father of 👭, Beer abuser.',
    joinedCompanyDate: '05/11/2010',
  },
  {
    image: '/images/team/Kalo.jpg',
    name: 'Kaloyan Kosev',
    position: 'Lead Engineer',
    hoverText:
      'Maker. Micro influencer (or not). Wannabe Entrepreneur. Currently focused on React, React Native, NodeJS.',
    joinedCompanyDate: '25/10/2012',
  },
  {
    name: 'Jordan Enev',
    image: '/images/team/Dancho.jpg',
    position: 'Lead Engineer',
    hoverText: 'White belt in BJJ, but black belt in coding!',
    joinedCompanyDate: '01/10/2010',
  },
  {
    image: '/images/team/Bobby.jpg',
    name: 'Borislav Itskov',
    position: 'Blockchain Engineer',
    hoverText: '日本好き.',
    joinedCompanyDate: '01/02/2013',
  },
  {
    image: '/images/team/Niki.jpg',
    name: 'Nikolay Atanasow',
    position: 'Blockchain Engineer',
    hoverText: 'Sports car enthusiast, Always driving. Sometimes racing.',
    joinedCompanyDate: '02/10/2015',
  },
  {
    image: '/images/team/Ivo.jpg',
    name: 'Ivo Yankov',
    position: 'Blockchain Engineer',
    hoverText: "Board game Master, I don't reinstall Windows!!!",
    joinedCompanyDate: '15/11/2011',
  },
  {
    image: '/images/team/Icka.jpg',
    name: 'Hristo Eftimov',
    position: 'Full-Stack Engineer',
    hoverText: 'Party-time bus driver, Sportswear model, Bartender.',
    joinedCompanyDate: '24/10/2012',
  },
  {
    image: '/images/team/Gery.jpg',
    name: 'Gergana Mihaylova',
    position: 'Front-end Engineer',
    hoverText: 'Art maker & Cooking lover.',
    joinedCompanyDate: '04/07/2017',
  },
  {
    image: '/images/team/Ceco.jpg',
    name: 'Cvetan Mihaylov',
    position: 'Back-end Engineer',
    hoverText: 'Likes high mountains & good music.',
    joinedCompanyDate: '26/02/2016',
  },
  {
    image: '/images/team/Petromir.jpg',
    name: 'Petromir Petrov',
    position: 'Front-end Engineer',
    hoverText:
      'Interested in everything tech. Scared of printers(except 3d ones).',
    joinedCompanyDate: '13/06/2022',
  },
  {
    image: '/images/team/Marti.jpg',
    name: 'Martina Teodosieva',
    position: 'Product Designer',
    hoverText: 'Shh, I hear colours...',
    joinedCompanyDate: '02/09/2015',
  },
  {
    image: '/images/team/Nade.jpg',
    name: 'Nadezhda Serafimova',
    position: 'Front-end Engineer',
    hoverText: 'Travel adventurer addicted to nature.',
    joinedCompanyDate: '15/07/2013',
  },
  {
    image: '/images/team/Botzy.jpg',
    name: 'Boryana Dimitrova',
    position: 'Front-end Engineer',
    hoverText: 'Moto girl, loves Touring, Photography & Cooking.',
    joinedCompanyDate: '24/02/2014',
  },
  {
    image: '/images/team/Zhan.jpg',
    name: 'Zhan Egikyan',
    position: 'PM & Server Admin',
    hoverText: 'Resident geek & Natural problem solver.',
    joinedCompanyDate: '19/05/2014',
  },
  {
    image: '/images/team/Vesko.jpg',
    name: 'Veselin Bratanov',
    position: 'Back-end Engineer',
    hoverText:
      'The mastermind behind every collage FOFISA, Community radio inventor, Allergic to sports.',
    joinedCompanyDate: '30/05/2014',
  },
  {
    image: '/images/team/Ivtsa.jpg',
    name: 'Ivaylo Atanasov',
    position: 'Firefighter',
    hoverText: 'Master procrastinator, Semi-audiophile, Amateur truck driver.',
    joinedCompanyDate: '01/07/2014',
  },
  {
    image: '/images/team/Preso.jpg',
    name: 'Presiyan Teodosiev',
    position: 'Operations',
    hoverText: 'Well known for his ice-breaking skills, Shape-shifter.',
    joinedCompanyDate: '01/12/2010',
  },
  {
    image: '/images/team/Yavka.jpg',
    name: 'Yavor Ivanov',
    position: 'Back-end Engineer',
    hoverText: 'A silent genius who knows how to exit Vim.',
    joinedCompanyDate: '01/09/2012',
  },
  {
    image: '/images/team/Simo.jpg',
    name: 'Simeon Petkov',
    position: 'Front-end Engineer',
    hoverText:
      'Body sculptor, Pass master on the Football field, Crypto investor.',
    joinedCompanyDate: '26/06/2017',
  },
  {
    image: '/images/team/Snezhi.jpg',
    name: 'Snezhina Trifonova',
    position: 'CFO',
    hoverText:
      'Phoenician successor, Tennis player on hold, Baby hugger at present.',
    joinedCompanyDate: '02/10/2016',
  },
  {
    image: '/images/team/Ivcho.jpg',
    name: 'Ivelin Megdanov',
    position: 'Front-end Engineer',
    hoverText:
      "A die-hard fan of Japanese cars with a soft spot for Mazda's rotary engines.",
    joinedCompanyDate: '20/02/2023',
  },
  {
    image: '/images/team/Boyo.jpg',
    name: 'Boyan Kirov',
    position: 'Back-end Engineer',
    hoverText:
      'Former professional poker player, Free market enthusiast, Loves competition.',
    joinedCompanyDate: '01/11/2022',
  },
  {
    image: '/images/team/Tim.jpg',
    name: 'Timothy Zimostrad',
    position: 'Full-stack Engineer',
    hoverText: 'Polish roots, Bulgarian hustle. Straight out of high school into code. Never short of a startup pitch.',
    joinedCompanyDate: '28/08/2023',
  },
  {
    image: '/images/team/Maria.jpg',
    name: 'Mariya Georgieva',
    position: 'Chief Accountant',
    hoverText: 'Book junkie and wine lover.',
    joinedCompanyDate: '15/10/2021',
  },
  {
    image: '/images/team/Teddy.jpg',
    name: 'Teodora Ivanova',
    position: 'Marketing & Projects',
    hoverText: 'Zen philosopher & Avid learner.',
    joinedCompanyDate: '01/02/2021',
  },
  {
    image: '/images/team/Donika.jpg',
    name: 'Donika Zhelyazkova',
    position: 'Payroll Specialist',
    hoverText: 'Behind every happy payday stands this number ninja. Zero mistakes, zero delays.',
    joinedCompanyDate: '26/02/2024',
  },
  {
    image: '/images/team/Krisi.jpg',
    name: 'Kristiana Yakimova-Koseva',
    position: 'Marketing Specialist',
    hoverText: 'Knows what to post, when to post, and why it matters. Turns noise into buzz. Wife of Kaloyan!',
    joinedCompanyDate: '21/11/2024',
  },
  {
    image: '/images/team/George.jpg',
    name: 'Georgi Todorov',
    position: 'Business Consultant',
    hoverText: 'Opportunity hunter, door opener, professional dealmaker. Networking is the game.',
    joinedCompanyDate: '30/05/2025',
  },
]

export default team
