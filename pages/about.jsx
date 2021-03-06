import Head from 'next/head';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Image from 'react-bootstrap/Image';
import leadPastors from '../public/leadPastors.jpg';
import styles from '../styles/About.module.css';
import PageContainer from '../components/containers/PageContainer';

const Biography = ({ name, description, pictureSrc }) => (
  <>
    <div className={styles.bioLayout}>
      <div className={styles.nameBanner} />
      <h2 className={styles.name}>
        {name}
      </h2>
      <div className={styles.pictureContainer}>
        <Image fluid src={pictureSrc} />
      </div>
      <div className={styles.textContainer}>
        {description}
      </div>
    </div>
  </>
);

Biography.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureSrc: PropTypes.string.isRequired,
};

export default function About() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <PageContainer topBottomPadding>
      <Head>
        <title>{f('navBarAbout')}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Biography name={f('seniorPastorCaption')} description={f('seniorPastorBio')} pictureSrc={leadPastors.src} />
    </PageContainer>
  );
}
