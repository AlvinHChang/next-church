import PropTypes from 'prop-types';
import Head from 'next/head';
import { useIntl, FormattedDate, FormattedTime } from 'react-intl';
import globalStyles from '../styles/globals.module.css';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';

export const getStaticProps = async () => {
  const events = await prisma.event.findMany();
  return { props: { events } };
};

const EventList = ({ events }) => (
  <List title="Events">
    {events.map(({ name, date, id }) => (
      <List.Item key={id}>
        <div className={styles.itemContainer}>
          <div className={styles.itemEventDate}>
            <FormattedDate value={date} month="short" day="2-digit" />
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
