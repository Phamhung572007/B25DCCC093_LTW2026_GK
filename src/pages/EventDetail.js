import { useNavigate, useParams } from 'react-router-dom';
import Countdown from '../components/Countdown';

const EventDetail = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventId = Number(id);
  const event = events.find(({ id: currentId }) => currentId === eventId);

  if (!event) {
    return (
      <section className="content-section detail-section">
        <div className="surface-card empty-card">
          <p className="status-message">Không tìm thấy sự kiện</p>
          <button className="button button-secondary" type="button" onClick={() => navigate(-1)}>
            Quay lại
          </button>
        </div>
      </section>
    );
  }

  const { name, location, date, registered, capacity } = event;

  return (
    <section className="content-section detail-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CHI TIẾT SỰ KIỆN</p>
          <h1>{name}</h1>
        </div>
      </div>
      <div className="surface-card detail-card">
        <dl className="detail-list">
          <div className="detail-row"><dt>Tên sự kiện:</dt><dd>{name}</dd></div>
          <div className="detail-row"><dt>Địa điểm:</dt><dd>{location}</dd></div>
          <div className="detail-row"><dt>Ngày:</dt><dd>{date}</dd></div>
          <div className="detail-row"><dt>Số chỗ:</dt><dd>{registered}/{capacity}</dd></div>
        </dl>
        <Countdown date={date} />
        <button className="button button-secondary" type="button" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    </section>
  );
};

export default EventDetail;
