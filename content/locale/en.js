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
  },
  '/new': {
  },
};

Object.keys(en).forEach((key) => {
  en[key] = { ...en[key], ...sharedTranslation };
});

// eslint-disable-next-line import/prefer-default-export
export { en };
