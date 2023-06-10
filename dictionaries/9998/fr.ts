import CountDown from "dictionaries/countDown/fr";
import NotInterested from "dictionaries/notInterested/fr";

const dictionary = {
  welcome: {
    title: 'Débloquez des réductions exclusives et boostez vos économies !',
    paragraph:
      'Obtenez jusqu’à <strong> 80% </strong> de réduction sur votre prochain achat auprès des meilleures marques de commerce électronique en répondant à un sondage',
    button: 'COMMENCER',
  },
  thankYou: {
    title: 'Merci!',
    paragraph: 'Votre offre personnalisée est ci-dessous',
    button: 'OBTENIR UNE OFFRE',
  },
  privacy: {
    text1: 'Nous ne stockons ni ne partageons vos informations privées avec quiconque.',
    text2: 'Il est utilisé pour vous fournir la meilleure offre personnelle',
  },
  commentSection: {
    title: 'Derniers gagnants!',
    shoppingReviews: [
      {
        id: 1,
        title: 'Je ne pouvais pas croire l’accord',
        text: 'J’ai répondu à un sondage et j’ai été récompensé par une offre spéciale! L’expérience m’a rappelé l’importance de partager mes pensées et mes opinions, car cela peut entraîner des avantages inattendus. Je suis reconnaissant d’avoir l’occasion de recevoir une offre spéciale, et l’expérience m’a inspiré à continuer à participer à des sondages.',
        likes: 10,
        rating: 5,
        personImage: '/images/reviewers/female101.webp',
        personName: 'Rini Sari',
        winImages: ['/images/shoppingReviews/en/female1.webp'],
      },
      {
        id: 2,
        title: 'Une expérience enrichissante',
        text: 'J’ai répondu à un sondage et j’ai été ravi de recevoir une offre spéciale. L’expérience a été enrichissante et cela m’a fait du bien de savoir que mes opinions comptaient. La réduction sur le produit était un bonus, et je suis reconnaissant de l’opportunité d’économiser de l’argent tout en découvrant quelque chose de nouveau.',
        likes: 14,
        rating: 5,
        personImage: '/images/reviewers/female.webp',
        personName: 'Elizabeth Taylor',
        winImages: ['/images/shoppingReviews/en/female2.webp'],
      },
      {
        id: 3,
        title: 'Économies surprises',
        text: 'Les économies surprises sur le produit ont été une expérience délicieuse, et cela m’a fait apprécier les petites choses de la vie. L’expérience m’a appris à garder l’esprit ouvert et à saisir de nouvelles opportunités.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/female102.webp',
        personName: 'Retno Wulandari',
        winImages: ['/images/shoppingReviews/en/female3.webp'],
      },
      {
        id: 4,
        title: 'Pleurage!',
        text: 'Cela fonctionne réellement, essayez-le vous-même',
        likes: 8,
        rating: 5,
        personImage: '/images/reviewers/female103.webp',
        personName: 'Dewi Lestari',
        winImages: ['/images/shoppingReviews/en/female4.webp'],
      },
      {
        id: 5,
        title: 'Remises inattendues',
        text: 'J’ai répondu à un sondage et j’ai été agréablement surpris de recevoir un rabais spécial. Les rabais inattendus sur le produit ont rendu l’expérience encore plus agréable, et cela m’a appris la valeur de tenter ma chance sur quelque chose de nouveau.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/male.webp',
        personName: 'Budi Susanto',
        winImages: ['/images/shoppingReviews/en/male1.webp'],
      },
      {
        id: 6,
        title: 'Remises inattendues',
        text: 'La possibilité d’économiser de l’argent sur le produit après avoir répondu au sondage a été une bonne surprise, et cela m’a rappelé que de bonnes choses peuvent arriver lorsque nous prenons le temps de partager nos pensées et nos opinions. Merci à l’équipe de sondage de m’avoir donné l’occasion d’économiser de l’argent et d’essayer quelque chose de nouveau.',
        likes: 2,
        rating: 5,
        personImage: '/images/reviewers/male1.webp',
        personName: 'Adi Santoso',
        winImages: ['/images/shoppingReviews/en/male2.webp'],
      },
    ],
  },
  countDown: CountDown,
  notInterested: NotInterested,
};

export default dictionary;