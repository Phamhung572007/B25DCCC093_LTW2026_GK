import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  name: '',
  location: '',
  date: '',
  capacity: '',
};

const AddEvent = ({ onAddEvent }) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.location.trim() || !form.date || !form.capacity.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    onAddEvent({
      name: form.name.trim(),
      location: form.location.trim(),
      date: form.date,
      capacity: Number(form.capacity),
    });
    setError('');
    setForm(initialForm);
    navigate('/events', { replace: true });
  };

  return (
    <section className="content-section form-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">MỞ RỘNG HOẠT ĐỘNG</p>
          <h1>Thêm sự kiện mới</h1>
          <p className="section-description">Điền thông tin để đưa sự kiện vào danh sách CLB.</p>
        </div>
      </div>
      <form className="surface-card event-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="event-name">Tên sự kiện</label>
          <input
            id="event-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Ví dụ: Workshop React nâng cao"
          />
        </div>
        <div className="form-field">
          <label htmlFor="event-location">Địa điểm</label>
          <input
            id="event-location"
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            placeholder="Ví dụ: Hội trường A"
          />
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="event-date">Ngày diễn ra</label>
            <input
              id="event-date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="event-capacity">Sức chứa</label>
            <input
              id="event-capacity"
              name="capacity"
              type="number"
              value={form.capacity}
              onChange={handleChange}
              placeholder="Ví dụ: 100"
            />
          </div>
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="form-footer">
          <button className="button button-primary" type="submit">Thêm</button>
        </div>
      </form>
    </section>
  );
};

export default AddEvent;
