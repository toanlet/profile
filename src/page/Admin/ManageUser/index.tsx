import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getUser } from 'src/api/user';

const ManageUser = () => {
  useEffect(() => {
    const getListUser = async () => {
      const res = await getUser();
      console.log('res:', res);
    };
    getListUser();
  }, []);
  return (
    <div className="home">
      <h1>ManageUser</h1>
      <Outlet />
    </div>
  );
};

export default ManageUser;
