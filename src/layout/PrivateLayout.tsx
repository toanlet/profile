import { PATH } from 'src/config/contanst';
import { Navigate } from 'react-router-dom';

const PrivateLayout: React.FC<any> = ({ children }) => {
  const token = '';
  if (token) {
    return (
      <div>
        Private Layout
        {children}
      </div>
    );
  }
  return <Navigate to={PATH.LOGIN} />;
};

export default PrivateLayout;
