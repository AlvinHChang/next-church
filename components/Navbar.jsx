import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, pathname } = router;
  return (
    <nav className={styles.container}>
      <div>Logo Here</div>
      <ul className={styles.linkContainer}>
        <li className={styles.link}>
          <Link href="/">{f('navBarHome')}</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">{f('navBarAbout')}</Link>
        </li>
        <li className={styles.link}>
          <Link href="/new">{f('navBarNew')}</Link>
        </li>
        <li className={styles.link}>
          <Link href={pathname} locale={locale === 'en' ? 'zh' : 'en'}>{f('navBarSwitchLanguage')}</Link>
        </li>
      </ul>
    </nav>
  );
}
