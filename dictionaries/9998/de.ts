import CountDown from 'dictionaries/countDown/de';
import NotInterested from 'dictionaries/notInterested/de';

const dictionary = {
  welcome: {
    title: 'Schalten Sie exklusive Rabatte frei und steigern Sie Ihre Ersparnisse!',
    paragraph:
      'Erhalten Sie bis zu <strong> 80 % </strong> Rabatt auf Ihren nächsten Einkauf bei Top-E-Commerce-Marken, indem Sie an einer Umfrage teilnehmen',
    button: 'ANFANGEN',
  },
  thankYou: {
    title: 'Vielen Dank!',
    paragraph: 'Ihr personalisiertes Angebot finden Sie unten',
    button: 'ANGEBOT EINHOLEN',
  },
  privacy: {
    text1: 'Wir speichern oder teilen Ihre privaten Informationen nicht mit Dritten.',
    text2: 'Es wird verwendet, um Ihnen das beste persönliche Angebot zu bieten',
  },
  commentSection: {
    title: 'Aktuelle Gewinner!',
    shoppingReviews: [
      {
        id: 1,
        title: 'Konnte den Deal nicht glauben',
        text: 'Ich habe an einer Umfrage teilgenommen und wurde mit einem Sonderangebot belohnt! Die Erfahrung war eine Erinnerung daran, wie wichtig es ist, meine Gedanken und Meinungen zu teilen, da dies zu unerwarteten Vorteilen führen kann. Ich bin dankbar für die Möglichkeit, ein Sonderangebot zu erhalten, und diese Erfahrung hat mich dazu inspiriert, weiterhin an Umfragen teilzunehmen.',
        likes: 10,
        rating: 5,
        personImage: '/images/reviewers/female101.webp',
        personName: 'Rini Sari',
        winImages: ['/images/shoppingReviews/en/female1.webp'],
      },
      {
        id: 2,
        title: 'Eine lohnende Erfahrung',
        text: 'Ich habe an einer Umfrage teilgenommen und mich über ein Sonderangebot gefreut. Die Erfahrung war lohnend, und es fühlte sich gut an zu wissen, dass meine Meinung zählte. Der Rabatt auf das Produkt war ein Bonus, und ich bin dankbar für die Möglichkeit, Geld zu sparen und gleichzeitig etwas Neues zu entdecken.',
        likes: 14,
        rating: 5,
        personImage: '/images/reviewers/female.webp',
        personName: 'Elizabeth Taylor',
        winImages: ['/images/shoppingReviews/en/female2.webp'],
      },
      {
        id: 3,
        title: 'Überraschende Einsparungen',
        text: 'Die überraschenden Einsparungen bei dem Produkt waren eine entzückende Erfahrung, und es hat mich dazu gebracht, die kleinen Dinge im Leben zu schätzen. Diese Erfahrung hat mich gelehrt, offen zu bleiben und neue Möglichkeiten anzunehmen.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/female102.webp',
        personName: 'Retno Wulandari',
        winImages: ['/images/shoppingReviews/en/female3.webp'],
      },
      {
        id: 4,
        title: 'Beeindruckend!',
        text: 'Es funktioniert tatsächlich, probieren Sie es selbst aus',
        likes: 8,
        rating: 5,
        personImage: '/images/reviewers/female103.webp',
        personName: 'Dewi Lestari',
        winImages: ['/images/shoppingReviews/en/female4.webp'],
      },
      {
        id: 5,
        title: 'Unerwartete Rabatte',
        text: 'Ich habe an einer Umfrage teilgenommen und war angenehm überrascht, einen Sonderrabatt zu erhalten. Die unerwarteten Rabatte auf das Produkt machten die Erfahrung noch angenehmer und lehrten mich, wie wertvoll es ist, etwas Neues zu wagen.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/male.webp',
        personName: 'Budi Susanto',
        winImages: ['/images/shoppingReviews/en/male1.webp'],
      },
      {
        id: 6,
        title: 'Unerwartete Rabatte',
        text: 'Die Möglichkeit, nach Abschluss der Umfrage Geld für das Produkt zu sparen, war eine willkommene Überraschung und erinnerte mich daran, dass gute Dinge passieren können, wenn wir uns die Zeit nehmen, unsere Gedanken und Meinungen zu teilen. Vielen Dank an das Umfrageteam für die Möglichkeit, Geld zu sparen und etwas Neues auszuprobieren.',
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
