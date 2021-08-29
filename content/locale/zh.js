const sharedTranslation = {
  navBarHome: '主頁',
  navBarSwitchLanguage: 'English',
  navBarAbout: '教會簡介',
  navBarBeta: 'beta',
  navBarNew: '新来的',
  navBarSermon: '讲道',
};

const zh = {
  '/': {
  },
  '/about': {
    seniorPastorBio: '本堂主任牧師吳立仁出生於印度，生長在一個信仰佛教的家庭中。蒙上帝的恩典，在基督教學校讀書時聽到福音，神的愛吸引了他，12歲時認識了耶穌為他的救主。最喜愛的經文是約翰福音三章16節：「上帝 愛 世 人 、 甚 至 將 他 的 獨 生 子 賜 給 他 們 、 叫 一 切 信 他 的 、 不 至 滅 亡 、 反 得 永 生 。」因著上帝的呼召，1986年主帶領他到香港信義宗神學院深造，期間認識了現在的師母，於1990年1月在香港結婚，同年5月畢業後，夫婦一同回到印度加爾各答靈糧堂事奉多年。1998年神帶領他一家到克利夫蘭，1999年中從那裡來到本會參與事奉。 師母伍妙霞是牧師助理；出生於香港，生長在基督教家庭，從小信主。她在香港一所基督教醫院任文職工作幾年後，蒙召獻身進神學院深造；也是牧師在神學院的同學。1989年神學院畢業事奉至今。現在教會參與各項事工，為牧師在家及教會的好幫手。 他們有兩個兒子，秉聰(Benjamin)及秉康(Timothy)，兩位都出生於印度。他們的禱告和心願就是全家一起事奉上帝，傳揚耶穌基督的寶貴福音。吳牧師及師母分別通曉英語、國語、粵語、客家話及台山話 。歡迎與他們聯絡，認識耶穌基督這位又真又活的上帝。',
    seniorPastorCaption: '本堂',
    englishPastorBio: '',
    englishPastorCaption: '',
  },
  '/eventManager': {
  },
  '/sermon': {
  },
  '/new': {
  },
};

Object.keys(zh).forEach((key) => {
  zh[key] = { ...zh[key], ...sharedTranslation };
});

// eslint-disable-next-line import/prefer-default-export
export { zh };
