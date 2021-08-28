import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from './Navbar.module.css';

export default function NavigationBar() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, pathname } = router;
  return (
    <Navbar expand="lg" className={styles.navBar}>
      <Container>
        <Navbar.Brand>True Light Lutheran Church</Navbar.Brand>
        <Navbar.Toggle className={styles.toggleButton} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.container} id="basic-navbar-nav">
          <ul className={styles.linkContainer}>
            <li className={styles.link}>
              <Link href="/">{f('navBarHome')}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">{f('navBarAbout')}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/sermon">{f('navBarSermon')}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/new">{f('navBarNew')}</Link>
            </li>
            <li className={styles.link}>
              <Link href={pathname} locale={locale === 'en' ? 'zh' : 'en'}>{f('navBarSwitchLanguage')}</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
