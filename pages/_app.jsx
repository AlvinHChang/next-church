/* eslint-disable react/jsx-props-no-spreading */
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
// import all locales through barrel file
import * as locales from '../content/locale';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (

    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Navbar />
      <Component {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
