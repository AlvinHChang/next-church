const sharedTranslation = {
  navBarHome: '主頁',
  navBarSwitchLanguage: 'English',
  navBarAbout: '教會簡介',
  navBarNew: '新来的',
};

const zh = {
  '/': {
  },
  '/about': {
  },
  '/new': {
  },
};

Object.keys(zh).forEach((key) => {
  zh[key] = { ...zh[key], ...sharedTranslation };
});

// eslint-disable-next-line import/prefer-default-export
export { zh };
