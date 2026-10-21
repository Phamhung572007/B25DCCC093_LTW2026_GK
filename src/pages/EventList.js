import EventTable from '../components/EventTable';

const EventList = ({ events, onDeleteEvent, onRegisterEvent }) => (
  <section className="content-section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">KHÁM PHÁ HOẠT ĐỘNG</p>
        <h1>Danh sách sự kiện</h1>
        <p className="section-description">Theo dõi lịch và đăng ký tham gia các sự kiện của CLB.</p>
      </div>
    </div>
    <div className="surface-card">
      <EventTable
        events={events}
        onDeleteEvent={onDeleteEvent}
        onRegisterEvent={onRegisterEvent}
      />
    </div>
  </section>
);

export default EventList;
