const BUILD_TAG = "wn-1726";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventList from './pages/EventList';
import AddEvent from './pages/AddEvent';
import EventDetail from './pages/EventDetail';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const savedEvents = localStorage.getItem('gk_events');

    if (savedEvents !== null) {
      try {
        const parsedEvents = JSON.parse(savedEvents);

        if (Array.isArray(parsedEvents)) {
          setEvents(parsedEvents);
          setLoading(false);
          return () => controller.abort();
        }
      } catch {}

      localStorage.removeItem('gk_events');
    }

    axios.get('/data/events.json', { signal: controller.signal })
      .then(({ data }) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((requestError) => {
        if (axios.isCancel(requestError)) {
          return;
        }

        setError(true);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem('gk_events', JSON.stringify(events));
    }
  }, [events, loading, error]);

  const handleAddEvent = (eventData) => {
    setEvents((currentEvents) => {
      const largestId = currentEvents.reduce(
        (largest, event) => Math.max(largest, event.id),
        0,
      );

      return [...currentEvents, { ...eventData, id: largestId + 1, registered: 0 }];
    });
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((currentEvents) => currentEvents.filter(({ id }) => id !== eventId));
  };

  const handleRegisterEvent = (eventId) => {
    setEvents((currentEvents) => currentEvents.map((event) => (
      event.id === eventId && event.registered < event.capacity
        ? { ...event, registered: event.registered + 1 }
        : event
    )));
  };

  return (
    <div className="app-shell" data-build-tag={BUILD_TAG}>
      <Routes>
        <Route element={<Layout loading={loading} error={error} />}>
          <Route index element={<Home events={events} />} />
          <Route
            path="events"
            element={(
              <EventList
                events={events}
                onDeleteEvent={handleDeleteEvent}
                onRegisterEvent={handleRegisterEvent}
              />
            )}
          />
          <Route path="events/new" element={<AddEvent onAddEvent={handleAddEvent} />} />
          <Route path="events/:id" element={<EventDetail events={events} />} />
          <Route path="*" element={<Home events={events} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
