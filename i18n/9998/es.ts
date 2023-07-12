import CountDown from "@i18n/countDown/es";
import NotInterested from "@i18n/notInterested/es";

const dictionary = {
  welcome: {
    title: '¡Desbloquea descuentos exclusivos y potencia tus ahorros!',
    paragraph:
      'Obtenga hasta un <strong> 80% </strong> de descuento en su próxima compra de las principales marcas de comercio electrónico completando la encuesta',
    button: 'EMPEZAR',
  },
  thankYou: {
    title: '¡Gracias!',
    paragraph: 'Tu oferta personalizada está a continuación',
    button: 'OBTENER OFERTA',
  },
  privacy: {
    text1: 'No almacenamos ni compartimos su información privada con nadie.',
    text2: 'Se utiliza para proporcionarle la mejor oferta personal',
  },
  commentSection: {
    title: '¡Últimos ganadores!',
    shoppingReviews: [
      {
        id: 1,
        title: 'No podía creer el trato',
        text: '¡Completé una encuesta y fui recompensado con una oferta especial! La experiencia fue un recordatorio de la importancia de compartir mis pensamientos y opiniones, ya que puede conducir a beneficios inesperados. Estoy agradecido por la oportunidad de recibir un trato especial, y la experiencia me ha inspirado a seguir participando en encuestas.',
        likes: 10,
        rating: 5,
        personImage: '/images/reviewers/female101.webp',
        personName: 'Rini Sari',
        winImages: ['/images/shoppingReviews/en/female1.webp'],
      },
      {
        id: 2,
        title: 'Una experiencia gratificante',
        text: 'Completé una encuesta y estuve encantado de recibir un trato especial. La experiencia fue gratificante, y me sentí bien al saber que mis opiniones importaban. El descuento en el producto fue una ventaja, y estoy agradecido por la oportunidad de ahorrar dinero mientras descubro algo nuevo.',
        likes: 14,
        rating: 5,
        personImage: '/images/reviewers/female.webp',
        personName: 'Elizabeth Taylor',
        winImages: ['/images/shoppingReviews/en/female2.webp'],
      },
      {
        id: 3,
        title: 'Ahorros sorpresa',
        text: 'El ahorro sorpresa en el producto fue una experiencia encantadora, y me hizo apreciar las pequeñas cosas de la vida. La experiencia me ha enseñado a mantener una mente abierta y a aprovechar nuevas oportunidades.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/female102.webp',
        personName: 'Retno Wulandari',
        winImages: ['/images/shoppingReviews/en/female3.webp'],
      },
      {
        id: 4,
        title: '¡Uau!',
        text: 'Realmente funciona, pruébalo tú mismo',
        likes: 8,
        rating: 5,
        personImage: '/images/reviewers/female103.webp',
        personName: 'Dewi Lestari',
        winImages: ['/images/shoppingReviews/en/female4.webp'],
      },
      {
        id: 5,
        title: 'Descuentos inesperados',
        text: 'Completé una encuesta y me sorprendió gratamente recibir un descuento especial. Los descuentos inesperados en el producto hicieron que la experiencia fuera aún más agradable, y me enseñó el valor de arriesgarme con algo nuevo.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/male.webp',
        personName: 'Budi Susanto',
        winImages: ['/images/shoppingReviews/en/male1.webp'],
      },
      {
        id: 6,
        title: 'Descuentos inesperados',
        text: 'La oportunidad de ahorrar dinero en el producto después de completar la encuesta fue una sorpresa bienvenida, y me recordó que pueden suceder cosas buenas cuando nos tomamos el tiempo para compartir nuestros pensamientos y opiniones. Gracias al equipo de la encuesta por la oportunidad de ahorrar dinero y probar algo nuevo.',
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