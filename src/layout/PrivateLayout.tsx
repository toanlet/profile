import { Navigate } from 'react-router-dom';
import { PATH } from 'src/config/contanst';

export const PrivateLayout: React.FC<any> = ({ children }) => {
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
