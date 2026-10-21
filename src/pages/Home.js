const Home = ({ events }) => {
  const totalRegistrations = events.reduce((total, { registered }) => total + registered, 0);
  const fullEventCount = events.filter(({ registered, capacity }) => registered >= capacity).length;

  return (
    <section className="welcome-card">
      <div className="welcome-copy">
        <p className="eyebrow">CÂU LẠC BỘ LẬP TRÌNH</p>
        <h1>Sự kiện CLB</h1>
        <p className="welcome-description">
          Chào mừng bạn đến với cổng thông tin các sự kiện của CLB.
          Khám phá hoạt động sắp tới và đăng ký tham gia nhé!
        </p>
        <div className="home-stats">
          <p><span>Tổng số sự kiện:</span> <strong>{events.length}</strong></p>
          <p><span>Tổng số lượt đăng ký:</span> <strong>{totalRegistrations}</strong></p>
          <p><span>Số sự kiện đã đầy:</span> <strong>{fullEventCount}</strong></p>
        </div>
      </div>
      <div className="welcome-art" aria-hidden="true">
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <span className="art-dot dot-one" />
        <span className="art-dot dot-two" />
        <span className="art-calendar">
          <span className="calendar-top" />
          <span className="calendar-grid"><i /><i /><i /><i /><i /><i /></span>
        </span>
      </div>
    </section>
  );
};

export default Home;
