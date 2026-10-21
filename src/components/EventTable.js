import EventRow from './EventRow';

const EventTable = ({ events, onDeleteEvent, onRegisterEvent }) => (
  <div className="table-scroll">
    <table className="events-table">
      <thead>
        <tr>
          <th scope="col">Sự kiện</th>
          <th scope="col">Địa điểm</th>
          <th scope="col">Ngày</th>
          <th scope="col">Số chỗ</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <EventRow
            key={event.id}
            event={event}
            onDeleteEvent={onDeleteEvent}
            onRegisterEvent={onRegisterEvent}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default EventTable;
