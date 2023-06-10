import CountDown from "dictionaries/countDown/th";
import NotInterested from "dictionaries/notInterested/th";

const dictionary = {
  welcome: {
    title: 'ปลดล็อกส่วนลดพิเศษและเพิ่มเงินออมของคุณ!',
    paragraph:
      'รับส่วนลดสูงสุด <strong> 80% </strong> สำหรับการซื้อครั้งต่อไปของคุณจากแบรนด์อีคอมเมิร์ซชั้นนำโดยทำแบบสำรวจ',
    button: 'เริ่ม',
  },
  thankYou: {
    title: 'ขอบคุณ!',
    paragraph: 'ข้อเสนอส่วนบุคคลของคุณอยู่ด้านล่าง',
    button: 'รับข้อเสนอ',
  },
  privacy: {
    text1: 'เราไม่จัดเก็บหรือแบ่งปันข้อมูลส่วนตัวของคุณกับใครก็ตาม',
    text2: 'ใช้เพื่อมอบข้อตกลงส่วนบุคคลที่ดีที่สุดให้กับคุณ',
  },
  commentSection: {
    title: 'ผู้ชนะล่าสุด!',
    shoppingReviews: [
      {
        id: 1,
        title: 'ไม่สามารถเชื่อข้อตกลง',
        text: 'ฉันเสร็จสิ้นการสำรวจและได้รับรางวัลด้วยข้อเสนอพิเศษ! ประสบการณ์เป็นเครื่องเตือนใจถึงความสำคัญของการแบ่งปันความคิดและความคิดเห็นของฉันเนื่องจากอาจนำไปสู่ผลประโยชน์ที่ไม่คาดคิด ฉันรู้สึกขอบคุณสำหรับโอกาสที่จะได้รับข้อตกลงพิเศษและประสบการณ์ได้เป็นแรงบันดาลใจให้ฉันเข้าร่วมการสำรวจต่อไป',
        likes: 10,
        rating: 5,
        personImage: '/images/reviewers/female101.webp',
        personName: 'Rini Sari',
        winImages: ['/images/shoppingReviews/th/female1.webp'],
      },
      {
        id: 2,
        title: 'ประสบการณ์ที่คุ้มค่า',
        text: 'ฉันเสร็จสิ้นการสำรวจและมีความยินดีที่ได้รับข้อตกลงพิเศษ ประสบการณ์นั้นได้รับรางวัลและรู้สึกดีที่รู้ว่าความคิดเห็นของฉันมีความสำคัญ ส่วนลดสำหรับผลิตภัณฑ์เป็นโบนัสและฉันรู้สึกขอบคุณสำหรับโอกาสที่จะประหยัดเงินในขณะที่ค้นพบสิ่งใหม่',
        likes: 14,
        rating: 5,
        personImage: '/images/reviewers/female.webp',
        personName: 'Elizabeth Taylor',
        winImages: ['/images/shoppingReviews/th/female2.webp'],
      },
      {
        id: 3,
        title: 'การออมที่น่าประหลาดใจ',
        text: 'การประหยัดอย่างน่าประหลาดใจสำหรับผลิตภัณฑ์เป็นประสบการณ์ที่น่ายินดี และทำให้ฉันซาบซึ้งกับสิ่งเล็กๆ น้อยๆ ในชีวิต ประสบการณ์สอนให้ฉันเปิดใจและเปิดรับโอกาสใหม่ๆ',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/female102.webp',
        personName: 'Retno Wulandari',
        winImages: ['/images/shoppingReviews/th/female3.webp'],
      },
      {
        id: 4,
        title: 'ว้าว!',
        text: 'ได้ผลจริงลองเอง',
        likes: 8,
        rating: 5,
        personImage: '/images/reviewers/female103.webp',
        personName: 'Dewi Lestari',
        winImages: ['/images/shoppingReviews/th/female4.webp'],
      },
      {
        id: 5,
        title: 'ส่วนลดที่ไม่คาดคิด',
        text: 'ฉันเสร็จสิ้นการสำรวจและรู้สึกประหลาดใจที่ได้รับส่วนลดพิเศษ ส่วนลดที่ไม่คาดคิดเกี่ยวกับผลิตภัณฑ์ทำให้ประสบการณ์สนุกยิ่งขึ้นและมันก็สอนให้ฉันเห็นคุณค่าของการมีโอกาสทำสิ่งใหม่ ๆ',
        likes: 6,
        rating: 5,
        personImage: '/images/reviewers/male.webp',
        personName: 'Budi Susanto',
        winImages: ['/images/shoppingReviews/th/male1.webp'],
      },
      {
        id: 6,
        title: 'ส่วนลดที่ไม่คาดคิด',
        text: 'โอกาสที่จะประหยัดเงินในผลิตภัณฑ์หลังจากทำแบบสำรวจเสร็จสิ้นเป็นเรื่องน่าประหลาดใจที่น่ายินดีและมันทำให้ฉันนึกถึงว่าสิ่งดีๆสามารถเกิดขึ้นได้เมื่อเราใช้เวลาแบ่งปันความคิดและความคิดเห็นของเรา ขอขอบคุณทีมสำรวจสำหรับโอกาสในการประหยัดเงินและลองสิ่งใหม่ ๆ',
        likes: 2,
        rating: 5,
        personImage: '/images/reviewers/male1.webp',
        personName: 'Adi Santoso',
        winImages: ['/images/shoppingReviews/th/male2.webp'],
      },
    ],
  },
  countDown: CountDown,
  notInterested: NotInterested,
};
export default dictionary;
