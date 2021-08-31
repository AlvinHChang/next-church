import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useIntl, FormattedDate, FormattedTime } from 'react-intl';
import globalStyles from '../styles/globals.module.css';
import List from '../components/List';
import styles from '../styles/Home.module.css';

const parseEvents = ({ name, date }) => ({
  name,
  date: new Date(date),
});

const EventList = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('/api/event')
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setEvents(response.events.map(parseEvents));
      });
  }, []);
  return (
    <List title="Events">
      {events.map(({ name, date }) => (
        <List.Item>
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
};

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={globalStyles.pageContainer}>
      <Head>
        <title>{f('navBarHome')}</title>
      </Head>
      <div className={`${globalStyles.componentContainer} ${styles.eventContainer}`}>
        <EventList />
      </div>
    </div>
  );
}
