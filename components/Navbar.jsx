import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale } = router;
  return (
    <div className={styles.container}>
      <li>{f('home')}</li>
      <li><Link href="/" locale={locale === 'en' ? 'zh' : 'en'}>test</Link></li>
    </div>
  );
}
