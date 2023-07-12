import CountDown from "@i18n/countDown/it";
import NotInterested from "@i18n/notInterested/it";

const dictionary = {
  welcome: {
    title: 'Sblocca sconti esclusivi e potenzia i tuoi risparmi!',
    paragraph:
      "Ottieni fino <strong> all'80% </strong> di sconto sul tuo prossimo acquisto dai migliori marchi di e-commerce completando il sondaggio",
    button: 'COMINCIARE',
  },
  thankYou: {
    title: 'Grazie!',
    paragraph: 'La tua offerta personalizzata è qui sotto',
    button: 'RICHIEDI OFFERTA',
  },
  privacy: {
    text1: 'Non memorizziamo o condividiamo le tue informazioni private con nessuno.',
    text2: 'È usato per offrirti il miglior affare personale',
  },
  commentSection: {
    title: 'Ultimi vincitori!',
    shoppingReviews: [
      {
        id: 1,
        title: "Non potevo credere all'affare",
        text: "Ho completato un sondaggio e sono stato premiato con un'offerta speciale! L'esperienza è stata un promemoria dell'importanza di condividere i miei pensieri e opinioni, in quanto può portare a benefici inaspettati. Sono grato per l'opportunità di ricevere un accordo speciale e l'esperienza mi ha ispirato a continuare a partecipare ai sondaggi.",
        likes: 10,
        rating: 5,
        personImage: '/images/reviewers/female101.webp',
        personName: 'Rini Sari',
        winImages: ['/images/shoppingReviews/en/female1.webp'],
      },
      {
        id: 2,
        title: "Un'esperienza gratificante",
        text: "Ho completato un sondaggio e sono stato felice di ricevere un'offerta speciale. L'esperienza è stata gratificante ed è stato bello sapere che le mie opinioni contavano. Lo sconto sul prodotto è stato un bonus e sono grato per l'opportunità di risparmiare denaro mentre scopro qualcosa di nuovo.",
        likes: 14,
        rating: 5,
        personImage: '/images/reviewers/female.webp',
        personName: 'Elizabeth Taylor',
        winImages: ['/images/shoppingReviews/en/female2.webp'],
      },
      {
        id: 3,
        title: 'Risparmi a sorpresa',
        text: "Il risparmio a sorpresa sul prodotto è stata un'esperienza deliziosa e mi ha fatto apprezzare le piccole cose della vita. L'esperienza mi ha insegnato a mantenere una mente aperta e ad abbracciare nuove opportunità.",
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/female102.webp',
        personName: 'Retno Wulandari',
        winImages: ['/images/shoppingReviews/en/female3.webp'],
      },
      {
        id: 4,
        title: 'Wow!',
        text: 'Funziona davvero, provalo tu stesso',
        likes: 8,
        rating: 5,
        personImage: '/images/reviewers/female103.webp',
        personName: 'Dewi Lestari',
        winImages: ['/images/shoppingReviews/en/female4.webp'],
      },
      {
        id: 5,
        title: 'Sconti inaspettati',
        text: "Ho completato un sondaggio e sono rimasto piacevolmente sorpreso di ricevere uno sconto speciale. Gli sconti inaspettati sul prodotto hanno reso l'esperienza ancora più piacevole e mi hanno insegnato il valore di rischiare qualcosa di nuovo.",
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/male.webp',
        personName: 'Budi Susanto',
        winImages: ['/images/shoppingReviews/en/male1.webp'],
      },
      {
        id: 6,
        title: 'Sconti inaspettati',
        text: "L'opportunità di risparmiare denaro sul prodotto dopo aver completato il sondaggio è stata una gradita sorpresa e mi ha ricordato che le cose buone possono accadere quando ci prendiamo il tempo di condividere i nostri pensieri e opinioni. Grazie al team del sondaggio per l'opportunità di risparmiare denaro e provare qualcosa di nuovo.",
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
