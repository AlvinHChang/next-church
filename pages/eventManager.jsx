import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useIntl, FormattedDate, FormattedTime } from 'react-intl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import globalStyles from '../styles/globals.module.css';
import List from '../components/List';
import styles from '../styles/EventManager.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_DEFAULT_URL || 'http://localhost:3000';

// eslint-disable-next-line no-undef
const createEvent = async (name, date) => fetch(`${BASE_URL}/api/event`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    date,
  }),
});

// eslint-disable-next-line no-undef
const deleteEvent = async (id) => fetch(`${BASE_URL}/api/event`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id,
  }),
});

// eslint-disable-next-line no-undef
const getEvents = async () => fetch(`${BASE_URL}/api/event`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default function EventManager() {
  const { formatMessage } = useIntl();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [errorText, setErrorText] = useState('');
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents()
      .then((res) => res.json())
      .then((res) => setEvents(res.events));
  }, []);

  async function handleRemove(eventId) {
    const res = await deleteEvent(eventId);
    if (res.ok) {
      const eventRemoved = events.filter(({ id }) => id !== eventId);
      setEvents(eventRemoved);
    }
  }
  async function handleAdd() {
    const eventDateTime = new Date(`${eventDate} ${eventTime}`);
    const res = await createEvent(eventName, eventDateTime);
    if (res.ok) {
      const newEvent = await res.json();
      events.push(newEvent);
      setEvents(events);
    } else {
      setErrorText('Error Occurred');
    }
  }
  const EventList = () => (
    <List title="Events">
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
            <div className={styles.itemEventDelete}>
              <Button onClick={() => handleRemove(id)}>X</Button>
            </div>
          </div>
        </List.Item>
      ))}
    </List>
  );
  const handleDateTimeValidation = (event, cb) => {
    const { name, value } = event.target;
    let newDate = null;
    switch (name) {
      case 'time':
        newDate = new Date(`${eventDate} ${value}`);
        break;
      case 'date':
        newDate = new Date(`${value} ${eventTime}`);
        break;
      default:
        break;
    }
    if (newDate <= Date.now()) {
      setErrorText('Error: Date and Time must be in the future.');
    } else {
      cb();
    }
  };
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
            handleAdd();
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="What is the event?" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control name="date" type="date" value={eventDate} onChange={(e) => handleDateTimeValidation(e, () => setEventDate(e.target.value))} />
            <Form.Label>Time</Form.Label>
            <Form.Control name="time" type="time" value={eventTime} onChange={(e) => handleDateTimeValidation(e, () => setEventTime(e.target.value))} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="primary" type="submit" disabled={!(eventName && eventDate && eventTime)}>
              Add Event
            </Button>
          </Form.Group>
          <Form.Text>{errorText}</Form.Text>
        </Form>
      </div>
      <div className={`${globalStyles.componentContainer} ${styles.eventContainer}`}>
        <EventList />
      </div>
    </div>
  );
}
