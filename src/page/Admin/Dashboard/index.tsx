import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="home">
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
