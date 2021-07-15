const sharedTranslation = {
  navBarHome: 'home',
  navBarSwitchLanguage: '中文',
  navBarAbout: 'about',
  navBarNew: 'newcomers',
};

const en = {
  '/': {
  },
  '/about': {
    leadPastor: `Rev. Lit Inn Wu, our Senior Pastor, was born in India into a Buddhist family. He came to know Jesus as his Savior at age 12 while studying in a Christian school. His favorite verse is John 3:16, ‘For God so loved the world that He gave His one and only Son, that whoever believes in Him will not perish but have everlasting life.’ He graduated from the Lutheran Theological Seminary in Hong Kong in 1990 where he also met his wife, Rev. Jenny Wu.

            Rev. Jenny Wu, our Chinese Ministry Pastor, was born in Hong Kong and grew up in a Christian family. She graduated from the Lutheran Theological Seminary in Hong Kong in 1989.  She also graduated from Logos Evangelical Seminary in USA in 2017.  They have two grown-up sons.

            Rev. Jenny and Rev. Lit Inn Wu have since served together, complementing one another to proclaim the Gospel and make disciples. They started to serve in True Light in 1999. They speak English, Mandarin, Cantonese, Hakka and Toi San. They welcome you to contact them to know more about Jesus, the true and living God.`,
  },
  '/new': {
  },
};

Object.keys(en).forEach((key) => {
  en[key] = { ...en[key], ...sharedTranslation };
});

// eslint-disable-next-line import/prefer-default-export
export { en };
