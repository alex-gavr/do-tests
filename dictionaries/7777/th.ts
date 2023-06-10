const dictionary = {
  welcome: {
    heading: 'ประเทศใดมีประชากรสูงกว่ากัน?',
    ScoresContainer: {
      score: 'คะแนน',
      hintsAvailable: 'คําแนะนําที่มีอยู่',
    },
    Countries: {
      CountryCard: {
        positiveFeedback: [
          'เยี่ยมมาก!',
          'คุณเข้าใจถูกต้องแล้ว!',
          'คําตอบที่ถูกต้อง!',
          'ทำดีมาก!',
          'คุณพูดถูกจริงๆ!',
          'นั่นคือคําตอบที่ถูกต้อง!',
          'ดี!',
          'คุณตอกมัน!',
          'เล่นดี!',
          'ยอดเยี่ยม!',
          'คําตอบของคุณถูกต้อง!',
          'จุดบน!',
          'คุณเข้าใจแล้ว!',
          'หลักแหลม!',
          'นั่นคือคําตอบที่ถูกต้อง!',
          'การทํางานที่ดี!',
          'คุณกําลังลุกเป็นไฟ!',
        ],
        lost: 'ผิด 😢',
        instructions: 'เลือกประเทศบนหรือล่าง',
        secondsLeft: 'เหลืออีก 2 วินาที',
      },
      Button: {
        nothingPicked: 'เลือกประเทศ',
        answerIsCorrect: 'คู่ถัดไป',
        confirmCountry: 'ยืนยัน',
      },
      HintButton: {
        hintShown: 'หวังว่ามันจะช่วยให้',
        noHintAvailable: 'ไม่มีเครดิตคําใบ้เหลืออยู่',
        getHint: 'รับคําใบ้',
      },
    },
  },
  gameOver: {
    heading: 'คะแนนสุดท้าย',
    header: {
      leaderboardButton: 'ลีดเดอร์บอร์ด',
      topScore: 'คะแนนสูงสุด',
      moreHintsButton: ' คำใบ้',
      hintsAvailable: 'คําแนะนําที่มีอยู่',
    },
    footer: {
      finish: 'เสร็จ',
      playAgain: 'เล่นอีกครั้ง',
    },
    roundScoreFeedback: {
      greatScore: [
        'ไชโย!',
        'สุดยอด!',
        'น่าทึ่ง!',
        'พิเศษ!',
        'ไม่น่าเชื่อ!',
        'งดงาม!',
        'ยอดเยี่ยม!',
        'ไม่น่าเชื่อ!',
        'วิเศษ!',
        'ยอด เยี่ยม!',
        'ความพยายามที่ดี!',
        'การทํางานที่ดี!',
        'ความพยายามที่ยอดเยี่ยม!',
      ],
      mediumScore: [
        'พยายามต่อไป!',
        'คุณมีสิ่งนี้!',
        'อย่ายอมแพ้!',
        'คราวหน้า!',
        'ไปต่อ!',
        'การฝึกฝนอยู่เสมอทำให้เกิดความชำนาญ!',
        'ลองอีกครั้ง!',
        'คุณกําลังปรับปรุง!',
        'มุ่งมั่น!',
        'ผลักดันตัวเอง!',
        'คุณกําลังปรับปรุง!',
        'ไม่เลว!',
        'ใกล้จะถึงแล้ว!',
      ],
      zeroScore: [
        'เชิดหน้าเข้าไว้!',
        'คิดบวก!',
        'ทุกความล้มเหลวคือบทเรียน!',
        'นี่เป็นเพียงจุดเริ่มต้น!',
        'ลุกขึ้นจากเถ้าถ่าน!',
        'เปิดรับความท้าทาย!',
        'การเดินทางของคุณเริ่มต้นตอนนี้!',
        'อย่าปล่อยให้ความพ่ายแพ้เป็นตัวกําหนดคุณ!',
        'มุ่งเน้นไปที่ความก้าวหน้าไม่ใช่ความสมบูรณ์แบบ!',
        'เดินหน้าต่อไป!',
      ],
    },
    topScoreFeedback: {
      biggerPhrases: [
        'ตั้งเป้าให้สูงขึ้นและเอาชนะคะแนนสูงสุดของคุณ!',
        'ผลักดันต่อไปและเหนือกว่าสิ่งที่ดีที่สุดของคุณ!',
        'ด้วยการฝึกฝนคุณจะไปถึงจุดสูงสุดใหม่!',
        'ลองอีกครั้งและคุณจะทําลายสถิติของคุณ!',
        'ท้าทายตัวเองเพื่อเอาชนะคะแนนสูงสุดของคุณ!',
        'ความพยายามครั้งต่อไปของคุณจะทําลายสิ่งที่ดีที่สุดส่วนตัวของคุณ!',
        'คะแนนสูงสุดของคุณอยู่ใกล้แค่เอื้อม!',
        'คุณมาถูกทางแล้ว!',
        'แซงหน้าคะแนนสูงสุดของคุณในครั้งต่อไป!',
        'ความมุ่งมั่นของคุณจะเกินคะแนนสูงสุดของคุณ!',
        'มุ่งเป้าไปที่ดวงดาวและทําลายสถิติของคุณเอง!',
      ],
      newBest: [
        'สถิติใหม่! งานที่น่าทึ่ง!',
        'ขอแสดงความยินดีกับสิ่งที่ดีที่สุดของคุณ!',
        'คุณเอาชนะตัวเอง! ทำดีมาก!',
        'คุณมาถึงจุดสูงสุดใหม่แล้ว! สุดยอด!',
        'คะแนนสูงสุดแตก! ให้มันขึ้น!',
        'ไม่น่าเชื่อ! คุณได้กําหนดมาตรฐานใหม่แล้ว!',
        'ไม่น่าเชื่อ! คุณได้ยกระดับมาตรฐาน!',
        'ทําลายสถิติ! ผลักดันต่อไป!',
        'ประสิทธิภาพที่น่าอัศจรรย์! ไปต่อ!',
        'คุณกําลังลุกเป็นไฟ! คะแนนที่ดีที่สุดยัง!',
      ],
    },
    positiveFeedback: {
      text: [
        'อีกนิดหน่อยเพื่อให้ได้ตําแหน่ง{{reachTarget}}',
        'ผลักดันต่อไปเพื่อให้ได้สถานที่{{reachTarget}}!',
        'ความพยายามอีกเล็กน้อยและคุณจะไปถึงตําแหน่ง{{reachTarget}}!',
        'เพียงไม่กี่จุดเพื่อรักษาความปลอดภัยสถานที่{{reachTarget}}!',
        'เดินหน้าต่อไปสําหรับตําแหน่ง{{reachTarget}}นั้น!',
        'คุณอยู่ไม่ไกลจากสถานที่{{reachTarget}}! จดจ่ออยู่กับคุณ!',
        'คุณใกล้จะ{{reachTarget}}ตําแหน่ง! อย่ายอมแพ้ตอนนี้!',
        'ใกล้มาก! ตั้งเป้าให้สูงขึ้นสําหรับตําแหน่ง{{reachTarget}}!',
        'สถานที่{{reachTarget}}อยู่ในสายตา! ผลักดันต่อไป!',
      ],
      nearTopThree: [
        'คุณอยู่ที่หน้าประตูของลีดเดอร์บอร์ด! เลือกตําแหน่ง{{reachTarget}}!',
        'คุณอยู่ใกล้จุดสูงสุดแล้ว! สถานที่{{reachTarget}}รอคุณอยู่!',
      ],
    },
  },
  leaderboard: {
    totalPlayers: 'ผู้เล่นทั้งหมด',
    playerCard: {
      you: 'ท่าน',
      topScore: 'คะแนนสูงสุด',
      hints: 'คำ แนะ นำ',
    },
    buttons: {
      back: 'กลับ',
      playAgain: 'เล่นอีกครั้ง',
    },
  },
};

export default dictionary;