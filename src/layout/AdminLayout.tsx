import { Outlet } from 'react-router-dom';

export const AdminLayout: React.FC<any> = () => {
  return (
    <div>
      Admin layout
      <Outlet />
    </div>
  );
};
