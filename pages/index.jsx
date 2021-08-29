import PropTypes from 'prop-types';
import Head from 'next/head';
import { useIntl, FormattedDate, FormattedTime } from 'react-intl';
import globalStyles from '../styles/globals.module.css';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';

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

function Home({ events }) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={globalStyles.pageContainer}>
      <Head>
        <title>{f('navBarHome')}</title>
      </Head>
      <div className={`${globalStyles.componentContainer} ${styles.eventContainer}`}>
        <EventList events={events} />
      </div>
    </div>
  );
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
