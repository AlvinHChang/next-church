import Head from 'next/head';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import leadPastors from '../public/leadPastors.jpg';
import globalStyles from '../styles/Home.module.css';
import styles from '../styles/About.module.css';

export default function About() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>{f('navBarAbout')}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={globalStyles.main}>
        <Card
          bg="secondary"
          text="light"
          className={styles.aboutContainer}
        >
          <div className={styles.pictureContainer}>
            <Image src={leadPastors} className={styles.picture} />
          </div>
          <Card.Body>
            <Card.Title>Get To Know Us</Card.Title>
            <Card.Text>
              Rev. Lit Inn Wu, our Senior Pastor, was born in India into a Buddhist family. He came to know Jesus as his Savior at age 12 while studying in a Christian school. His favorite verse is John 3:16, ‘For God so loved the world that He gave His one and only Son, that whoever believes in Him will not perish but have everlasting life.’ He graduated from the Lutheran Theological Seminary in Hong Kong in 1990 where he also met his wife, Rev. Jenny Wu.

              Rev. Jenny Wu, our Chinese Ministry Pastor, was born in Hong Kong and grew up in a Christian family. She graduated from the Lutheran Theological Seminary in Hong Kong in 1989.  She also graduated from Logos Evangelical Seminary in USA in 2017.  They have two grown-up sons.

              Rev. Jenny and Rev. Lit Inn Wu have since served together, complementing one another to proclaim the Gospel and make disciples. They started to serve in True Light in 1999. They speak English, Mandarin, Cantonese, Hakka and Toi San. They welcome you to contact them to know more about Jesus, the true and living God.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {f('navBarHome')}
      </main>
    </div>
  );
}
