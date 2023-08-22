import { type CalendarState } from './types';

const initialCalendarData: CalendarState = {
  2023: {
    1: {
      space: 0,
      days: {
        1: { name: '신정', text: '', isHoliday: true, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '', text: '', isHoliday: false, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '', text: '', isHoliday: false, bgColor: '' },
        6: { name: '소한', text: '', isHoliday: false, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: { name: '', text: '', isHoliday: true, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: { name: '', text: '', isHoliday: false, bgColor: '' },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: true, bgColor: '' },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '대한', text: '', isHoliday: false, bgColor: '' },
        21: { name: '', text: '', isHoliday: true, bgColor: '' },
        22: { name: '설날', text: '', isHoliday: true, bgColor: '' },
        23: { name: '', text: '', isHoliday: true, bgColor: '' },
        24: { name: '대체공휴일', text: '', isHoliday: true, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
        31: { name: '', text: '', isHoliday: false, bgColor: '' },
      },
    },
    2: {
      space: 3,
      days: {
        1: { name: '', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '', text: '', isHoliday: false, bgColor: '' },
        4: { name: '입춘', text: '', isHoliday: false, bgColor: '' },
        5: { name: '정월대보름', text: '', isHoliday: true, bgColor: '' },
        6: { name: '', text: '', isHoliday: false, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: { name: '', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: { name: '', text: '', isHoliday: false, bgColor: '' },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: true, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '밸런타인데이', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: false, bgColor: '' },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '우수', text: '', isHoliday: true, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '', text: '', isHoliday: false, bgColor: '' },
        22: { name: '', text: '', isHoliday: false, bgColor: '' },
        23: { name: '', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: true, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '2.28 민주운동', text: '', isHoliday: false, bgColor: '' },
      },
    },
    3: {
      space: 3,
      days: {
        1: { name: '삼일절', text: '', isHoliday: true, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '납세자의 날', text: '', isHoliday: false, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '', text: '', isHoliday: true, bgColor: '' },
        6: { name: '경칩', text: '', isHoliday: false, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: {
          name: '국제 여성의 날, 3·8 민주의 거',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: { name: '', text: '', isHoliday: false, bgColor: '' },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: true, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '화이트데이', text: '', isHoliday: false, bgColor: '' },
        15: {
          name: '상공의 날, 315의거기념일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: true, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '춘분', text: '', isHoliday: false, bgColor: '' },
        22: { name: '세계 물의 날', text: '', isHoliday: false, bgColor: '' },
        23: {
          name: '국제 강아지의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        24: { name: '서해수호의 날', text: '', isHoliday: false, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: true, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
        31: { name: '', text: '', isHoliday: false, bgColor: '' },
      },
    },
    4: {
      space: 6,
      days: {
        1: { name: '수산인의 날', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: true, bgColor: '' },
        3: {
          name: '4.3 희생자 추념일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '식목일, 청명', text: '', isHoliday: false, bgColor: '' },
        6: { name: '한식', text: '', isHoliday: false, bgColor: '' },
        7: {
          name: '보건의 날, 향토예삐군의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        8: { name: '', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: true, bgColor: '' },
        10: { name: '', text: '', isHoliday: false, bgColor: '' },
        11: {
          name: '임시정부 수립일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        12: { name: '도서관의 날', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: false, bgColor: '' },
        16: { name: '국민안전의 날', text: '', isHoliday: true, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '4.19혁명', text: '', isHoliday: false, bgColor: '' },
        20: {
          name: '곡우, 장애인의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        21: { name: '과학의 날', text: '', isHoliday: false, bgColor: '' },
        22: {
          name: '지구의 날, 정보통신의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        23: { name: '', text: '', isHoliday: true, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '법의 날', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '충무공 탄신일', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: true, bgColor: '' },
      },
    },
    5: {
      space: 1,
      days: {
        1: { name: '근로자의 날', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '', text: '', isHoliday: false, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '어린이 날', text: '', isHoliday: true, bgColor: '' },
        6: { name: '입하', text: '', isHoliday: false, bgColor: '' },
        7: { name: '', text: '', isHoliday: true, bgColor: '' },
        8: { name: '어버이날', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: {
          name: '바다식목일, 유권자의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        11: {
          name: '동학농민혁명 기념일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        12: {
          name: '국제 간호사의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '식품안전의 날', text: '', isHoliday: true, bgColor: '' },
        15: {
          name: '스승의 날, 성년의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: {
          name: '5.18민주화운동기념일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        19: { name: '발명의 날', text: '', isHoliday: false, bgColor: '' },
        20: { name: '세계인의 날', text: '', isHoliday: false, bgColor: '' },
        21: {
          name: '소만, 부부의 날',
          text: '',
          isHoliday: true,
          bgColor: '',
        },
        22: { name: '', text: '', isHoliday: false, bgColor: '' },
        23: { name: '', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '방재의 날', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '부처님 오신 날', text: '', isHoliday: true, bgColor: '' },
        28: { name: '', text: '', isHoliday: true, bgColor: '' },
        29: { name: '대체 휴일', text: '', isHoliday: true, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
        31: {
          name: '세계 금연의 날, 바다의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
      },
    },
    6: {
      space: 4,
      days: {
        1: { name: '의병의 날', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '', text: '', isHoliday: false, bgColor: '' },
        4: { name: '', text: '', isHoliday: true, bgColor: '' },
        5: { name: '환경의 날', text: '', isHoliday: false, bgColor: '' },
        6: { name: '현충일', text: '', isHoliday: true, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: { name: '', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: {
          name: '6.10 민주항쟁기념일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        11: { name: '', text: '', isHoliday: true, bgColor: '' },
        12: { name: '', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: {
          name: '노인학대 예방의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: true, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '하지', text: '', isHoliday: false, bgColor: '' },
        22: { name: '단오', text: '', isHoliday: false, bgColor: '' },
        23: { name: '', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '6.25 전쟁일', text: '', isHoliday: true, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '철도의 날', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
      },
    },
    7: {
      space: 6,
      days: {
        1: { name: '', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: true, bgColor: '' },
        3: { name: '', text: '', isHoliday: false, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '', text: '', isHoliday: false, bgColor: '' },
        6: { name: '', text: '', isHoliday: false, bgColor: '' },
        7: { name: '소서', text: '', isHoliday: false, bgColor: '' },
        8: { name: '', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: true, bgColor: '' },
        10: { name: '', text: '', isHoliday: false, bgColor: '' },
        11: { name: '초복', text: '', isHoliday: false, bgColor: '' },
        12: { name: '정보보호의 날', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: false, bgColor: '' },
        16: { name: '', text: '', isHoliday: true, bgColor: '' },
        17: { name: '제헌절', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '중복', text: '', isHoliday: false, bgColor: '' },
        22: { name: '', text: '', isHoliday: false, bgColor: '' },
        23: { name: '대서', text: '', isHoliday: true, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: true, bgColor: '' },
        31: { name: '', text: '', isHoliday: false, bgColor: '' },
      },
    },
    8: {
      space: 2,
      days: {
        1: { name: '유두절', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '', text: '', isHoliday: false, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '', text: '', isHoliday: false, bgColor: '' },
        6: { name: '', text: '', isHoliday: true, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: { name: '입추', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: { name: '말복', text: '', isHoliday: false, bgColor: '' },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: true, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '광복절', text: '', isHoliday: true, bgColor: '' },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '', text: '', isHoliday: true, bgColor: '' },
        21: { name: '', text: '', isHoliday: false, bgColor: '' },
        22: {
          name: '칠석',
          text: 'dfsafsdafasdfasdf',
          isHoliday: false,
          bgColor: '',
        },
        23: { name: '처서', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: true, bgColor: '' },
        28: { name: '', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
        31: { name: '', text: '', isHoliday: false, bgColor: '' },
      },
    },
    9: {
      space: 5,
      days: {
        1: { name: '', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '', text: '', isHoliday: true, bgColor: '' },
        4: { name: '지식재산의 날', text: '', isHoliday: false, bgColor: '' },
        5: { name: '', text: '', isHoliday: false, bgColor: '' },
        6: { name: '', text: '', isHoliday: false, bgColor: '' },
        7: { name: '푸른하늘의날', text: '', isHoliday: false, bgColor: '' },
        8: { name: '백로', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: {
          name: '세계 자상예발의 날, 해양 경찰의 날',
          text: '',
          isHoliday: true,
          bgColor: '',
        },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: false, bgColor: '' },
        16: { name: '청년의날', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: true, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '치매극복의 날', text: '', isHoliday: false, bgColor: '' },
        22: { name: '', text: '', isHoliday: false, bgColor: '' },
        23: { name: '추분', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: true, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '', text: '', isHoliday: true, bgColor: '' },
        29: { name: '추석', text: '', isHoliday: true, bgColor: '' },
        30: { name: '', text: '', isHoliday: true, bgColor: '' },
      },
    },
    10: {
      space: 0,
      days: {
        1: { name: '국군의 날', text: '', isHoliday: true, bgColor: '' },
        2: { name: '노인의 날', text: '', isHoliday: false, bgColor: '' },
        3: { name: '개천절', text: '', isHoliday: true, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '세계 한인의 날', text: '', isHoliday: false, bgColor: '' },
        6: { name: '', text: '', isHoliday: false, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: { name: '한로', text: '', isHoliday: true, bgColor: '' },
        9: { name: '한글날', text: '', isHoliday: true, bgColor: '' },
        10: {
          name: '임산부의 날, 정신건강의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '호스피스의 날', text: '', isHoliday: false, bgColor: '' },
        15: { name: '체육의 날', text: '', isHoliday: true, bgColor: '' },
        16: { name: '부마민주항쟁', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: {
          name: '경찰의 날, 문화의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        22: { name: '', text: '', isHoliday: true, bgColor: '' },
        23: { name: '중양절', text: '', isHoliday: false, bgColor: '' },
        24: { name: '상강', text: '', isHoliday: false, bgColor: '' },
        25: { name: '독도의 날', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '교정의 날', text: '', isHoliday: false, bgColor: '' },
        29: { name: '지방자치의 날', text: '', isHoliday: true, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
        31: { name: '회계의 날', text: '', isHoliday: false, bgColor: '' },
      },
    },
    11: {
      space: 3,
      days: {
        1: { name: '', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: {
          name: '학생 독립운동 기념일',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        4: { name: '점자의 날', text: '', isHoliday: false, bgColor: '' },
        5: { name: '소상공인의 날', text: '', isHoliday: true, bgColor: '' },
        6: { name: '', text: '', isHoliday: false, bgColor: '' },
        7: { name: '', text: '', isHoliday: false, bgColor: '' },
        8: { name: '입동', text: '', isHoliday: false, bgColor: '' },
        9: { name: '소방의 날', text: '', isHoliday: false, bgColor: '' },
        10: { name: '', text: '', isHoliday: false, bgColor: '' },
        11: {
          name: '유엔찬전용사 국제추모식, 보행자의 날, 농업인의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        12: { name: '', text: '', isHoliday: true, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: false, bgColor: '' },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '순국선열의 날', text: '', isHoliday: false, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: {
          name: '아동학대예방의날',
          text: '',
          isHoliday: true,
          bgColor: '',
        },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '', text: '', isHoliday: false, bgColor: '' },
        22: {
          name: '소설, 김치의 날',
          text: '',
          isHoliday: false,
          bgColor: '',
        },
        23: { name: '', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: false, bgColor: '' },
        25: { name: '', text: '', isHoliday: false, bgColor: '' },
        26: { name: '', text: '', isHoliday: true, bgColor: '' },
        27: { name: '', text: '', isHoliday: false, bgColor: '' },
        28: { name: '', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
      },
    },
    12: {
      space: 5,
      days: {
        1: { name: '', text: '', isHoliday: false, bgColor: '' },
        2: { name: '', text: '', isHoliday: false, bgColor: '' },
        3: { name: '소비자의 날', text: '', isHoliday: true, bgColor: '' },
        4: { name: '', text: '', isHoliday: false, bgColor: '' },
        5: { name: '무역의 날', text: '', isHoliday: false, bgColor: '' },
        6: { name: '', text: '', isHoliday: false, bgColor: '' },
        7: { name: '대설', text: '', isHoliday: false, bgColor: '' },
        8: { name: '', text: '', isHoliday: false, bgColor: '' },
        9: { name: '', text: '', isHoliday: false, bgColor: '' },
        10: { name: '', text: '', isHoliday: true, bgColor: '' },
        11: { name: '', text: '', isHoliday: false, bgColor: '' },
        12: { name: '', text: '', isHoliday: false, bgColor: '' },
        13: { name: '', text: '', isHoliday: false, bgColor: '' },
        14: { name: '', text: '', isHoliday: false, bgColor: '' },
        15: { name: '', text: '', isHoliday: false, bgColor: '' },
        16: { name: '', text: '', isHoliday: false, bgColor: '' },
        17: { name: '', text: '', isHoliday: true, bgColor: '' },
        18: { name: '', text: '', isHoliday: false, bgColor: '' },
        19: { name: '', text: '', isHoliday: false, bgColor: '' },
        20: { name: '', text: '', isHoliday: false, bgColor: '' },
        21: { name: '', text: '', isHoliday: false, bgColor: '' },
        22: { name: '동지', text: '', isHoliday: false, bgColor: '' },
        23: { name: '', text: '', isHoliday: false, bgColor: '' },
        24: { name: '', text: '', isHoliday: true, bgColor: '' },
        25: { name: '성탄절', text: '', isHoliday: true, bgColor: '' },
        26: { name: '', text: '', isHoliday: false, bgColor: '' },
        27: { name: '원자력의 날', text: '', isHoliday: true, bgColor: '' },
        28: { name: '', text: '', isHoliday: false, bgColor: '' },
        29: { name: '', text: '', isHoliday: false, bgColor: '' },
        30: { name: '', text: '', isHoliday: false, bgColor: '' },
        31: { name: '', text: '', isHoliday: true, bgColor: '' },
      },
    },
  },
};

export default initialCalendarData;
