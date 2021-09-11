import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useIntl, FormattedDate, FormattedTime } from 'react-intl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';
import List from '../components/List';
import prisma from '../lib/prisma';
import PageContainer from '../components/containers/PageContainer';
import GenericSection from '../components/layouts/sections/GenericSection';

// TODO: Set as ServerSide props for now until publish should be used,
// then we will switch to getStaticProps
export const getServerSideProps = async () => {
  const events = await prisma.event.findMany({
    orderBy: [
      {
        date: 'asc',
      },
    ],
    where: {
      date: {
        gte: new Date(),
      },
    },
    take: 8,
  });
  return { props: { events } };
};

const EventList = ({ events }) => (
  <List title="Upcoming Events">
    {events.map(({ name, date, id }) => (
      <List.Item key={id}>
        <div className={styles.itemContainer}>
          <div className={styles.itemEventDate}>
            <div className={styles.dateDay}>
              <FormattedDate value={date} day="2-digit" />
            </div>
            <div className={styles.dateMonth}>
              <FormattedDate value={date} month="short" />
            </div>
          </div>
          <div className={styles.itemEventName}>{name}</div>
          <div className={styles.itemEventTime}>
            <FormattedTime value={date} weekday="short" />
          </div>
        </div>
      </List.Item>
    ))}
  </List>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const WeeklyMeetings = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className={styles.weeklyMeetingsCard}>
            <div className={styles.weeklyMeetingsHeading}>{ f('bibleStudy') }</div>
            <div className={styles.weeklyMeetingsDescription}>
              <div className={styles.weeklyMeetingsTime}>{f('bibleStudyTime')}</div>
              {f('bibleStudyDescription')}
            </div>
          </div>
        </Col>
        <Col md="auto">
          <div className={styles.weeklyMeetingsCard}>
            <div className={styles.weeklyMeetingsHeading}>{f('sundayService')}</div>
            <div className={styles.weeklyMeetingsDescription}>
              <div className={styles.weeklyMeetingsTime}>{f('sundayServiceTime')}</div>
              {f('sundayServiceDescription')}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

function Home({ events }) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <PageContainer>
      <Head>
        <title>{f('navBarHome')}</title>
      </Head>
      <div className={styles.mainImage}>
        <div className={styles.landingContainer}>
          <h1>
            {f('landingText')}
          </h1>
          <Button variant="outline-light" className={styles.button}>
            <Link href="/new">{f('newHere')}</Link>
          </Button>
        </div>
      </div>
      <GenericSection color="var(--background-primary)">
        <WeeklyMeetings />
      </GenericSection>
      <GenericSection>
        <div className={`${styles.eventContainer}`}>
          <EventList events={events} />
        </div>
      </GenericSection>
    </PageContainer>
  );
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
