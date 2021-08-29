import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useIntl, FormattedDate, FormattedTime } from 'react-intl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import globalStyles from '../styles/globals.module.css';
import List from '../components/List';
import styles from '../styles/EventManager.module.css';
import prisma from '../lib/prisma';

export const getStaticProps = async () => {
  const events = await prisma.event.findMany();
  return { props: { events } };
};

// eslint-disable-next-line no-undef
const createEvent = async (name, date) => fetch('http://localhost:3000/api/event', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    date,
  }),
});

const deleteEvent = async (id) => fetch('http://localhost:3000/api/event', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id,
  }),
});

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
          <div className={styles.itemEventDelete}>
            <Button onClick={() => deleteEvent(id)}>X</Button>
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
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const f = (id) => formatMessage({ id });
  return (
    <div className={globalStyles.pageContainer}>
      <Head>
        <title>{f('navBarHome')}</title>
      </Head>
      <div className={`${globalStyles.componentContainer} ${styles.eventContainer}`}>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            if (eventDate && eventTime) {
              setIsDisabled(true);
              const eventDateTime = new Date(`${eventDate} ${eventTime}`);
              await createEvent(eventName, eventDateTime);
              setIsDisabled(false);
            }
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="What is the event?" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isDisabled}>
            Submit
          </Button>
        </Form>
      </div>
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
