import Head from 'next/head';
import { useIntl } from 'react-intl';
import globalStyles from '../styles/globals.module.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={globalStyles.pageContainer}>
      <Head>
        <title>{f('navBarHome')}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to TrueLight
        </h1>
      </main>
    </div>
  );
}
