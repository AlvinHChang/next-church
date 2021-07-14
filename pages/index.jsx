import Head from 'next/head';
import { useIntl } from 'react-intl';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={styles.container}>
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
