import { Outlet } from 'react-router-dom';

const ManagePost = () => {
  return (
    <div className="home">
      <h1>ManagePost</h1>
      <Outlet />
    </div>
  );
};

export default ManagePost;
