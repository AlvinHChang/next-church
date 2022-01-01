const sharedTranslation = {
  navBarHome: 'home',
  navBarSwitchLanguage: '中文',
  navBarAbout: 'about',
  navBarBeta: 'beta',
  navBarNew: 'newcomers',
  navBarSermon: 'sermons',
};

const en = {
  '/': {
    landingText: 'Welcome to True Light Lutheran Church',
    newHere: 'I\'m new here!',
    bibleStudy: 'Weekly Bible Study',
    bibleStudyTime: '7:30pm',
    bibleStudyDescription: 'Come for a more intimate time of eating dinner together, digging deeper into Bible and discussing it, and praying for each other.',
    sundayService: 'Sunday Service',
    sundayServiceTime: '11:30am (9:30am on 1st Sunday of month)',
    sundayServiceDescription: 'Come join us for a time of worship. The first Sunday of each month is a join billingual service at 9:30am instead. Available online through zoom.',
  },
  '/about': {
    seniorPastorBio: `Rev. Lit Inn Wu, our Senior Pastor, was born in India into a Buddhist family. He came to know Jesus as his Savior at age 12 while studying in a Christian school. His favorite verse is John 3:16, ‘For God so loved the world that He gave His one and only Son, that whoever believes in Him will not perish but have everlasting life.’ He graduated from the Lutheran Theological Seminary in Hong Kong in 1990 where he also met his wife, Rev. Jenny Wu.

            Rev. Jenny Wu, our Chinese Ministry Pastor, was born in Hong Kong and grew up in a Christian family. She graduated from the Lutheran Theological Seminary in Hong Kong in 1989.  She also graduated from Logos Evangelical Seminary in USA in 2017.  They have two grown-up sons.

            Rev. Jenny and Rev. Lit Inn Wu have since served together, complementing one another to proclaim the Gospel and make disciples. They started to serve in True Light in 1999. They speak English, Mandarin, Cantonese, Hakka and Toi San. They welcome you to contact them to know more about Jesus, the true and living God.`,
    seniorPastorCaption: 'Pastor Jenny and Pastor Wu',
    englishPastorBio: `
    Rev. Wendell Cattron grew up in Alaska and moved to North Dakota in his teens.  When he was 17 years old, he came to know Jesus as his personal Savior. He married Gwen in 1980.  He is chemist by profession, but has a vocational calling in Christian ministry. He graduated from CP Wagner School of Ministry in 2006 earning a Master’s Degree in Practical Ministry, and was ordained as a Minister of the Gospel with Christ’s Mandate for Missions. He is serving as the English Outreach Pastor.

Gwen Cattron grew up in Minnesota and came to know Jesus when she was 16 years old.  She joined Daystar Ministries, a non-denominational Christian ministry, in 1974 where she met her husband, Wendell.  They have seven children and six grandchildren. Gwen has a vocational call to Christian ministry and evangelism. She is ordained as a Senior Chaplain, and also holds a Diploma of Ministry. She assists Rev. Wendell, working alongside him at church.
    `,
    englishPastorCaption: 'Pastor Wendell and Gwen',
  },
  '/eventManager': {
  },
  '/sermon': {
  },
  '/new': {
  },
};

Object.keys(en).forEach((key) => {
  en[key] = { ...en[key], ...sharedTranslation };
});

// eslint-disable-next-line import/prefer-default-export
export { en };
