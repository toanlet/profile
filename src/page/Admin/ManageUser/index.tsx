import { Outlet } from 'react-router-dom';

const ManageUser = () => {
  return (
    <div className="home">
      <h1>ManageUser</h1>
      <Outlet />
    </div>
  );
};

export default ManageUser;
