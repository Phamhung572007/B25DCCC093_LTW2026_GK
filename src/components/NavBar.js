import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="site-header">
    <div className="header-inner">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg className="brand-icon" viewBox="0 0 24 24">
            <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />
          </svg>
        </span>
        <span className="brand-copy">
          <strong>Sự kiện CLB</strong>
          <small>Câu lạc bộ Lập trình</small>
        </span>
      </div>
      <nav className="main-nav" aria-label="Điều hướng chính">
        <NavLink to="/" end>Trang chủ</NavLink>
        <NavLink to="/events" end>Danh sách</NavLink>
        <NavLink to="/events/new" end>Thêm mới</NavLink>
      </nav>
    </div>
  </header>
);

export default NavBar;
