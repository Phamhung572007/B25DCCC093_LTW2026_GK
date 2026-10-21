import { useState } from 'react';
import EventTable from '../components/EventTable';
import FilterBar from '../components/FilterBar';

const EventList = ({ events, onDeleteEvent, onRegisterEvent }) => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');

  const handleQueryShift = (event) => {
    setQuery(event.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const matchesName = event.name.toLocaleLowerCase().includes(normalizedQuery);
    const isFull = event.registered >= event.capacity;
    const matchesStatus = status === 'all'
      || (status === 'available' && !isFull)
      || (status === 'full' && isFull);

    return matchesName && matchesStatus;
  });

  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">KHÁM PHÁ HOẠT ĐỘNG</p>
          <h1>Danh sách sự kiện</h1>
          <p className="section-description">Theo dõi lịch và đăng ký tham gia các sự kiện của CLB.</p>
        </div>
      </div>
      <div className="surface-card">
        <FilterBar
          query={query}
          status={status}
          onQueryChange={handleQueryShift}
          onStatusChange={setStatus}
        />
        <p className="results-count">Tìm thấy {filteredEvents.length} sự kiện</p>
        {filteredEvents.length > 0 ? (
          <EventTable
            events={filteredEvents}
            onDeleteEvent={onDeleteEvent}
            onRegisterEvent={onRegisterEvent}
          />
        ) : (
          <p className="no-results">Không có dữ liệu</p>
        )}
      </div>
    </section>
  );
};

export default EventList;
