import { TSurvey } from 'types/Survey';

export const shoppingSurveyDataTh: TSurvey = [
  {
    id: 1,
    question: 'คุณอายุเท่าไร',
    answers: [
      {
        id: 1,
        text: 'ต่ำกว่า 18',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'teenExit',
      },
      {
        id: 2,
        text: '18-30',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: '31-45',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'มากกว่า 45',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 2,
    question: 'เพศของคุณคืออะไร?',
    answers: [
      {
        id: 1,
        text: 'ชาย',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'หญิง',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'คุณซื้อของออนไลน์โดยเฉลี่ยบ่อยแค่ไหน?',
    answers: [
      {
        id: 1,
        text: 'หลายครั้งต่อสัปดาห์',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'หนึ่งครั้งต่อสัปดาห์',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'หนึ่งครั้งต่อเดือน',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'ครั้งเดียวในหลายเดือน',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'คุณมักจะซื้อผลิตภัณฑ์แบบไหน?',
    answers: [
      {
        id: 1,
        text: 'สุขภาพและความงาม',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'สินค้าแฟชั่น',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'สินค้าใช้ในบ้าน',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'อุปกรณ์อิเล็กทรอนิกส์',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'ผลิตภัณฑ์ใดที่สนุกที่สุดในการซื้อสินค้า?',
    answers: [
      {
        id: 3,
        text: 'ผลิตภัณฑ์สำหรับพื้นที่อยู่อาศัยของฉัน',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'ที่สะท้อนถึงสไตล์ส่วนตัวของฉัน',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 1,
        text: 'การดูแลส่วนบุคคลหรือกรูมมิ่ง',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'นั่นทำให้กิจวัตรประจำวันของฉันง่ายขึ้น',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'ผลิตภัณฑ์ใดต้องการความสนใจหรือการปรับปรุงมากขึ้น?',
    answers: [
      {
        id: 3,
        text: 'เป็นอันตรายต่อสิ่งแวดล้อม',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: 'ล้าสมัยหรือไม่สะดวก',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 1,
        text: 'ด้วยความเสี่ยงด้านความปลอดภัย',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 4,
        text: 'แพงเกินไป',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
    ],
  },
];

export default shoppingSurveyDataTh;