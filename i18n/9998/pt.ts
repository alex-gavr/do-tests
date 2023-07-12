import CountDown from "@i18n/countDown/pt";
import NotInterested from "@i18n/notInterested/pt";

const dictionary = {
  welcome: {
    title: 'Desbloqueie descontos exclusivos e aumente suas economias!',
    paragraph:
      'Ganhe até <strong> 80% </strong> de desconto em sua próxima compra das principais marcas de e-commerce preenchendo uma pesquisa',
    button: 'COMEÇAR',
  },
  thankYou: {
    title: 'Obrigado!',
    paragraph: 'Seu negócio personalizado está abaixo',
    button: 'OBTER OFERTA',
  },
  privacy: {
    text1: 'Não armazenamos nem compartilhamos suas informações privadas com ninguém.',
    text2: 'É usado para fornecer-lhe o melhor negócio pessoal',
  },
  commentSection: {
    title: 'Últimos vencedores!',
    shoppingReviews: [
      {
        id: 1,
        title: 'Não conseguia acreditar no negócio',
        text: 'Completei uma pesquisa e fui recompensado com uma oferta especial! A experiência foi um lembrete da importância de compartilhar meus pensamentos e opiniões, pois pode levar a benefícios inesperados. Sou grato pela oportunidade de receber um acordo especial, e a experiência me inspirou a continuar participando de pesquisas.',
        likes: 10,
        rating: 5,
        personImage: '/images/reviewers/female101.webp',
        personName: 'Rini Sari',
        winImages: ['/images/shoppingReviews/en/female1.webp'],
      },
      {
        id: 2,
        title: 'Uma experiência gratificante',
        text: 'Preenchi uma pesquisa e fiquei muito feliz em receber uma oferta especial. A experiência foi gratificante, e foi bom saber que minhas opiniões eram importantes. O desconto no produto foi um bônus, e sou grato pela oportunidade de economizar enquanto descobre algo novo.',
        likes: 14,
        rating: 5,
        personImage: '/images/reviewers/female.webp',
        personName: 'Elizabete Taylor',
        winImages: ['/images/shoppingReviews/en/female2.webp'],
      },
      {
        id: 3,
        title: 'Economia surpresa',
        text: 'A economia surpresa no produto foi uma experiência deliciosa, e me fez apreciar as pequenas coisas da vida. A experiência me ensinou a manter a mente aberta e a abraçar novas oportunidades.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/female102.webp',
        personName: 'Retno Wulandari',
        winImages: ['/images/shoppingReviews/en/female3.webp'],
      },
      {
        id: 4,
        title: 'Uau!',
        text: 'Ele realmente funciona, experimente você mesmo',
        likes: 8,
        rating: 5,
        personImage: '/images/reviewers/female103.webp',
        personName: 'Dewi Lestari',
        winImages: ['/images/shoppingReviews/en/female4.webp'],
      },
      {
        id: 5,
        title: 'Descontos inesperados',
        text: 'Preenchi uma pesquisa e fiquei agradavelmente surpreso ao receber um desconto especial. Os descontos inesperados no produto tornaram a experiência ainda mais agradável, e me ensinou o valor de arriscar em algo novo.',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/male.webp',
        personName: 'Budi Susanto',
        winImages: ['/images/shoppingReviews/en/male1.webp'],
      },
      {
        id: 6,
        title: 'Descontos inesperados',
        text: 'A oportunidade de economizar dinheiro no produto depois de concluir a pesquisa foi uma grata surpresa, e me lembrou que coisas boas podem acontecer quando dedicamos um tempo para compartilhar nossos pensamentos e opiniões. Obrigado à equipe de pesquisa pela oportunidade de economizar dinheiro e tentar algo novo.',
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
