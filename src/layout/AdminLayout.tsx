import { Outlet } from 'react-router-dom';
import NavBar from 'src/component/NavBar';
import AdminHeader from 'src/component/Header/Admin-Header';
import './styles.scss';
import { useCheckDevice } from 'src/hook/useCheckDevice';
import { BREAKPOINTS } from 'src/config/contanst';
import { Drawer } from 'antd';
import { useAppSelector } from 'src/hook/useAppSelector';
import { useAppDispatch } from 'src/hook/useAppDispatch';
import { toggle } from 'src/reducers/common';

const AdminLayout: React.FC<any> = () => {
  const [isMobile] = useCheckDevice(BREAKPOINTS.HORIZONTAL_MOBILE);
  const { openDrawer } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggle());
  };
  return (
    <div className="admin-layout">
      {!isMobile && (
        <div className="left">
          <NavBar />
        </div>
      )}

      <Drawer
        open={openDrawer}
        onClose={handleClose}
        placement="left"
        closeIcon={false}
      >
        <NavBar />
      </Drawer>

      <div className="right">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
