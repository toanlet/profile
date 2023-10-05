import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App: React.FC<any> = () => {
  return <RouterProvider router={router} />;
};

export default App;
