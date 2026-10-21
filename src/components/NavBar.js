import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="site-header">
    <div className="header-inner">
      <div className="brand">
        <img className="brand-logo" src="/images/club-it-logo.jpg" alt="Logo Câu lạc bộ Lập trình" />
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
