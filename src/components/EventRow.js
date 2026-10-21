import { Link } from 'react-router-dom';

const EventRow = ({ event, onDeleteEvent, onRegisterEvent }) => {
  const { id, name, location, date, capacity, registered } = event;
  const isFull = registered >= capacity;

  return (
    <tr className={isFull ? 'event-row event-row-full' : 'event-row'}>
      <td>
        <Link className="event-link" to={`/events/${id}`}>{name}</Link>
        {isFull && <span className="full-badge">Đã đầy</span>}
      </td>
      <td>{location}</td>
      <td>{date}</td>
      <td>{registered}/{capacity}</td>
      <td>
        <div className="row-actions">
          <button
            className="button button-small button-primary"
            type="button"
            onClick={() => onRegisterEvent(id)}
            disabled={isFull}
          >
            Đăng ký
          </button>
          <button
            className="button button-small button-danger"
            type="button"
            onClick={() => onDeleteEvent(id)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EventRow;
