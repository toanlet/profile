import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
};
