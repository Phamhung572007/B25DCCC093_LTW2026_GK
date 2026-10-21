import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = ({ loading, error }) => (
  <>
    <NavBar />
    <main className="page-container">
      {loading ? (
        <p className="status-message" role="status">Đang tải...</p>
      ) : error ? (
        <p className="status-message status-error" role="alert">Không tải được dữ liệu</p>
      ) : (
        <Outlet />
      )}
    </main>
  </>
);

export default Layout;
